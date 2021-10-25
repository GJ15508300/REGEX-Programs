var readlineSync = require('readline-sync')
console.log("What are the colours of the French flag (in any order)");
console.log("it's blue, white and red");
var regex =  "(^(?!.*(blue).*)|^(?!.*(white).*)|^(?!.*(red).*))";
var color = readlineSync.question('enter flag colors');
var tst = regex.match(color);
console.log(tst);
if(tst==true)
{
    console.log("VALID");
}
else{
    console.log("INVALID");
}
