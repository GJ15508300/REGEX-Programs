var string = "You are a Bad Student";
console.log(string);   
var pattern=/Bad/;  
var replace="Good";  
var res = string.replace(/Bad/,replace);    
console.log("After replacing the substring, the modified string is:"+ '<br>');  
console.log(res); 