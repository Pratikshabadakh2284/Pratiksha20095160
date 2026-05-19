    let parse=(i)=>{
      o=parseInt(i)
      if (isNaN(o))
        throw("NaN");
      return o;
    }
    
//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67

let parse = (i) => {
      let o = parseInt(i);

      if (isNaN(o))
        throw("NaN");

      return o;
    }

    function safeParseList(text) {
      return text
        .trim()
        .split(/\s+/)
        .map(item => {
          try {
            return parse(item);
          }
          catch {
            return null;
          }
        })
        .filter(item => item !== null);
    }

    function calculateResult(input) {

      try {

        if (!input.includes(':'))
          throw("Invalid format");

        const [factorText, multipleText] = input.split(':');

        const factors = safeParseList(factorText);
        const multiples = safeParseList(multipleText);

        if (factors.length === 0 || multiples.length === 0)
          throw("Unfixable");

        const result = multiples
          .filter(value =>
            factors.some(factor =>
              factor !== 0 && value % factor === 0
            )
          )
          .reduce((sum, value) => sum + value, 0);

        return `${result} : ${input}`;

      }
      catch {

        return `corrupt : ${input}`;

      }

    }

    function runCalculation() {

      const input =
        document.getElementById("inputText").value;

      const result = calculateResult(input);

      document.getElementById("output").textContent =
        result;

    }

    runCalculation();
