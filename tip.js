// using const because identifier will not be reassigned
// tip range is the slider
const range = document.getElementById("tipRange");
// output field where it states the percent according to your position on the slider
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("btnCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("result");

//responds to slider event ondrag -- show value and add a % sign
range.ondrag = function() {
	tipOut.innerHTML = range.value + "%";
}

btnCalculate.onclick = function() {
   // bill amount is received as a string so it must be parsed and made a float	
   let theBill = parseFloat(billAmount.value);
   // ToFixed shows the two decimal places
   let tip = (theBill * (range.value/100)).toFixed(2);
   // will store the value of tip and bill amount
   let total = (theBill + parseFloat(tip)).toFixed(2);
   //ES6 string interpolation
   //first $ is literal dollar sign symbol second one is for string interpolation
   // use backtick to make string interpolation work!
   let out = `<strong>Tip Amount:</strong> $ ${tip} <br></strong>Total Bill:</strong> $ ${total}`;
   resultArea.innerHTML = out;

