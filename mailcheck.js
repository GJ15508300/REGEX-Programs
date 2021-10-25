var readlineSync = require('readline-sync')
var mail = readlineSync.question('enter password');
var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";       
console.log(mail.match(pattern)); 
//console.log(pattern.test(mail));
var check= pattern.match(mail);  
//check= pattern.test(mail);
if(check==true)
{
    console.log("VALID ");
}
else{
    console.log("INVALID");
}