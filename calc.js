function sum(num1,num2){
    return num1+num2;
}
function mult(num1,num2){
    return num1*num2;
}
function sub(num1,num2){
    return num1-num2;
}
function div(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2);
}

console.log("2+2="+calculator(2,2,sum));
console.log("2*2="+calculator(2,2,mult));
console.log("2-2="+calculator(2,2,sub));
console.log("2/2="+calculator(2,2,div));