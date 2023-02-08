const print = (txt) => console.log(txt); // function for print 


console.log("============= String's =============");

let date = Date(); //date function 

let objectString = new String(); // creating string object.

objectString = "hii this is String"; // assign value of object.

console.log(objectString); // print value of variable

print(objectString); // print value using function 

//JavaScript String Instance Properties:
print(objectString.constructor); // property of object 
print(objectString.length); // length of string 

// JavaScript String Instance Methods :

// 1. Slice Method : 
/* slice() extracts a part of a string and returns the extracted part in a new string.
 The method takes 2 parameters: start position, and end position (end not included). */

let str = "I am learning JavaScript"
print('==== Slice Method ====');
print(str.slice(2)); 
print(str.slice(0,5));
print(str.slice(-12,-5)); 
print(str.slice(-10,-6)); 
// substr() is similar to slice().

// 2. SubString 
print('==== substring ====');// 
print(str.substring(str.length,0));
// print(str.slice(str.length,0));// it does't work 

// 3. replace 
print('==== replace ====');// 

let replaceStr = "I am learning JavaScript"
print(replaceStr.replace('JavaScript',"Python"));
print(replaceStr.replace(/javascript/i,"Python")); // case sensitive ignore
let newRepStr = replaceStr + " JavaScript";
print(newRepStr.replace(/JavaScript/g,"Python")); // if replace all places 

print(newRepStr.replaceAll("JavaScript", "Python")); // replace globale using replaceAll() method

print(newRepStr.toLocaleUpperCase());
print(newRepStr.toLowerCase());
print(newRepStr.toUpperCase());


// 4. trim:
let trimStr = "   hello this is trim str      ";
print(trimStr.trim());
print(trimStr.trimEnd());
print(trimStr.trimStart());

// 5. String Padding
let padStr = "5";
print(padStr.padStart(4,"0"));

let intPadStr = 5;
let convertStr = intPadStr.toString();
print(convertStr.padEnd(3,"0"));

// 6. charAt

print(str.charAt(3));
print(str.charCodeAt(3));

// 7. split:

let Str = "a,b,c,d,f,r,s,r,ty,ty,serl,rety,asdf,dfg";
let splitText = Str.split(",");
print(splitText)
print(splitText.join(" "));
print(Str.length);
print(splitText.length);


// 8. search / indexOf

print(Str.search('d'));
print(Str.search(/D/i));
print(Str.search(/d/g));

print(Str.search('z')); // if not in string return -1

print(Str.indexOf('b')); // it does't work with regular exprations








