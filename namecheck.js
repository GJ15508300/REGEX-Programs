var readlineSync = require('readline-sync')
    var ctrl = readlineSync.question('enter password');
    var regex = /^[a-zA-Z ]{2,30}$/;    
    var test= regex.test(ctrl);
    console.log(test);
    if (test==true)
    {
        console.log("Valid name");
    }
    else{
        console.log("INVALID NAME");
    }