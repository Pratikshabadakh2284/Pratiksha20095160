//write a function to alert if overweight (15kg) baggage
 //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed


let check = () => {
  let w = parseInt(document.getElementById('weight').value);
  alert("Hello, checking your baggage weight.....  ", + w + "kg");
 
  if (w > 15) {
    let extraBaggage = w-15;
    document.getElementById('removed').style = 'display:block;'
    document.getElementById('remB').style = 'display:block;'
    alert("your baggage is overweight by  "+ extraBaggage + "kg..");
  }
  else {
    alert("Weight Ok: " + w +  "kg you can proceed....")
  }
}

let remove = () => {
  let actualWeight = parseInt(document.getElementById('weight').value);
  let removedWeight = parseInt(document.getElementById('removed').value);
  let newWeight = actualWeight - removedWeight;
  if (newWeight <= 15) {
    alert("new weight: " + newWeight + "kg Ok you can proceed....")
  }
  else {
    alert("Still overweight ", + newWeight + "kg");
  }
}

            //Test edit no. 2;
