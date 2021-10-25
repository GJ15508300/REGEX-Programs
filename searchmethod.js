console.log("SEARCH METHOD REGEX");
var string = "Our Site is helpfull for studying about technical courses.!";   
pattern="technical";  
var res = string.search(pattern); /* This statement stores the position of the pattern in a string, if it is found in a string. */  
console.log("Position of the pattern in a string:");   
console.log(res);  