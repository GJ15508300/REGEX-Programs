var readlineSync = require('readline-sync')
var mail = readlineSync.question('enter password');
var pattern = new RegExp (/^[a-zA-Z][a-zA-Z0-9-_.?]+@[a-zA-Z]*.[a-zA-Z]{2,3}.[a-zA-Z]{2,3}$/);
var check;     
//console.log(mail.match(pattern)); 
console.log(pattern.test(mail));
// check= pattern.match(mail);  
check=pattern.test(mail)
if(check==true)
{
    console.log("VALID ");
}
else
{
    console.log("INVALID");
}