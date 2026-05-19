///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page

 function parseNumbers(text) {
      return text
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter(num => !isNaN(num));
    }

    function calculateResult(input) {
      const [factorText = '', multipleText = ''] = input.split(':');

      const factors = parseNumbers(factorText);
      const multiples = parseNumbers(multipleText);

      const result = multiples
        .filter(value =>
          factors.some(
            factor => factor !== 0 && value % factor === 0
          )
        )
        .reduce((sum, value) => sum + value, 0);

      return `${result} : ${factors.join(' ')} : ${multiples.join(' ')}`;
    }

    function runCalculation() {
      const input = document.getElementById('inputText').value;

      const result = calculateResult(input);

      document.getElementById('output').textContent = result;
    }

    runCalculation();
  