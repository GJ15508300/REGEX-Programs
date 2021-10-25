    var readlineSync = require('readline-sync')
    var newPassword = readlineSync.question('enter password');
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    console.log(newPassword); 
    var check=regularExpression.test(newPassword)
    console.log(regularExpression.test(newPassword));
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        console.log("not a good password");
        return false;
    }
    if(check==true) {
        console.log("VALID PASSWORD");
        return false;
    }
    else{
        console.log("INVALID PASSWORD");
        console.log("password should contain atleast one number and one special character");
    }