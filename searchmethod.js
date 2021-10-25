console.log("SEARCH METHOD REGEX");
console.log("The search() method uses an expression to search for a match, and returns the position of the match.");
var string = "Our Site is helpfull for studying about technical courses.!";   
pattern="technical";  
var res = string.search(pattern); 
console.log("Position of the pattern in a string:");   
process.stdout.write(res);  