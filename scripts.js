const button = document.getElementById('convert'); // button id in HTML
const romanLet = document.getElementById('romanOutput'); //roman input
const inputNumber = document.getElementById('inputNumber'); //number input

//Number and ROman object array
const convertToRoman = (num) => {
  const romanAndNum = [
    {number: 1000, roman: 'M'},
    {number: 900, roman: 'CM'},
    {number: 500, roman: 'D'},
    {number: 400, roman: 'CD'},
    {number: 100, roman: 'C'},
    {number: 90,  roman: 'XC'},
    {number: 50,  roman: 'L'},
    {number: 40,  roman: 'XL'},
    {number: 10,  roman: 'X'},
    {number: 9,   roman: 'IX'},
    {number: 5,   roman: 'V'},
    {number: 4,   roman: 'IV'},
    {number: 1,   roman: 'I'},
  ];

  let result = '';

  //iterate romanAndNum array object
  for (let i = 0; i < romanAndNum.length; i++) {
    //while number is lessthan or equal to number input
    while (romanAndNum[i].number <= num) {
    //inputNumber  -  number
     num -= romanAndNum[i].number;
      //''   +   romanAndNumber roman
     result += romanAndNum[i].roman;     
    }  
  };

  //Return Roman value in Roman and number array object
  return romanLet.value = result;
};

//Function for the button
let getVal = () => {
  let num = inputNumber.value;
  //Callback funtion to convert number input to Roman
  convertToRoman(num);
}

//Event Listener
button.addEventListener('click', getVal);

/*
for loop is to loop around on romanAndNum array
while loop is to find the match value on the array
*/