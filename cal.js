const text=document.querySelector('.textView');

 function insert(num){
  text.value+=num;
 }
function clearText(){
  text.value="";
}
function clearBack(){
  var str = text.value;
  var res = str.substring(0,str.length - 1);
  text.value=res;
}
function add(num1,num2){
  return num1+num2;
}
function sub(num1,num2){
  return num1-num2;
}
function mul(num1,num2){
  return num1*num2;
}
function div(num1,num2){
  return num1/num2;
}
function equal(){
  var exp=text.value;
  var number1,number2,operation ;
  var opIndex;
  if (exp.includes("+"))
    opIndex=exp.indexOf("+");
  else if (exp.includes("-"))
    opIndex=exp.indexOf("-");
  else if (exp.includes("*"))
    opIndex=exp.indexOf("*");
  else if (exp.includes("/"))
    opIndex=exp.indexOf("/");
    else {
      return text.value=exp;
      }
  operation=exp.substring(opIndex,opIndex+1);
  number1= parseFloat(exp.substring(0,opIndex));
  number2=parseFloat(exp.substring(opIndex+1));
  text.value=result(operation,number1,number2);

}
function result(operation,number1,number2){
  switch (operation) {
    case '+':
       return add(number1,number2);
      break;
    case '-':
       return sub(number1,number2);
      break;
    case '*':
       return mul(number1,number2);
      break;
    case '/':
       return div(number1,number2);
      break;
            default:

  }
}
