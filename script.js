//Temperature conversion
const textBox= document.getElementById("textBox");
const toFareinheit= document.getElementById("toFareinheit");
const toCelcius= document.getElementById("toCelcius");
const result= document.getElementById("result");
let temp;

function convert(){

     if (toFareinheit.checked){

        temp = textBox.value;
        temp= Number(temp);
        temp= temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F";

     }
     else if(toCelcius.checked){

      temp=textBox.value;
      temp=Number(temp);
      temp= (temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"℃";


     }
     else
     {
      result.textContent= `select a unit`;
     }
}
