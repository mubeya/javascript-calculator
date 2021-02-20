function clearInput(){
  for(var i = 0;i<document.querySelectorAll(".nbr").length;i++)
  {
       document.querySelectorAll(".nbr")[i].value='';
   }
}


for(var i = 0;i<document.querySelectorAll(".btn").length;i++)
{
     document.querySelectorAll("button")[i].addEventListener("click", function(){
     var buttonInnerHTML=this.innerHTML;
     calculate(buttonInnerHTML);
   });
}


function calculate(islem){

  var number1 = document.querySelector("#number1").value;
  var number2 = document.querySelector("#number2").value;

  switch (islem) {
    case "+":
      document.querySelector("#result").value=parseInt(number1) + parseInt(number2);
      break;
    case "-":
      document.querySelector("#result").value=parseInt(number1) - parseInt(number2);
      break;
    case "x":
      document.querySelector("#result").value=parseInt(number1) * parseInt(number2);
      break;
    case "/":
      document.querySelector("#result").value=parseInt(number1) / parseInt(number2);
      break;
    default:
  }
}
