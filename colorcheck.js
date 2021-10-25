var readlineSync = require('readline-sync')
console.log("What are the colours of the Indian flag (in any order)");
console.log("it's Orange, white, green");
var regex = new RegExp ( /^(?!.*(Orange).*)|^(?!.*(white).*)|^(?!.*(green).*)$/ );
var color = readlineSync.question('enter flag colors');
var tst = regex.test(color);
console.log(tst);
if(tst==true)
{
    console.log("VALID");
}
else
{
    console.log("INVALID");
}
