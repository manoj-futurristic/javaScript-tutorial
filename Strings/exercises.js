const print = (txt) => console.log(txt + '\n'); // function for print 

// 1. check data type 

let str = "check this is string or not";
let num = 5;
let object = new String();
const arr = [];

const checkType = (txt) => {
    if (typeof txt === 'string') {
        print(`${txt} => string`);
        return true;
    } else {
        print(`${txt} =>  ${typeof txt}`);
        return false;
    }
};

// checkType(str);
// checkType(num);
// checkType(object);
// checkType(arr);
// checkType();
// checkType(null);

print(`value is string => ${checkType(str)}`); // return true
print(`value is strring => ${checkType(5)}`); // return false

// 2. reverse of string.

const reverseString = (txt) => {
    // if (!checkType(txt)) return 'give input is not String type'; //if you don't want to convert non string data type.
    let splitString = txt.toString().split("");  // this statement convert given input to String.
    const reveseArr = splitString.reverse();
    let finalString = reveseArr.join("");
    return finalString;
};

var test = reverseString(str);
print(`reverse of string =>  ${test}`);

// 3. check reverse of string same as given string 

const checkStringsAreSame = (txt) => {
    let reverseTxt = reverseString(txt);
    return txt === reverseTxt;
};

print(`reverse of string same as string => ${checkStringsAreSame('DAD')}`);


// 4. check string is empty or not 


const checkStringIsEmpty = (txt) => {
    if (txt.trim() === "") {
        return true;
    } else {
        return false;
    }
};

print(`String is Empty => ${checkStringIsEmpty(str)}`);
print(`String is Empty => ${checkStringIsEmpty(" ")}`);

// 5. convert string to array

const stringToArray = (txt) => {
    try {
        const arr = txt.split(" ");
        return arr;
    } catch (error) {
        return error.String;
    }
};

print(`String to Array => ${stringToArray(str)}`);

// 6. extract a specified number of characters from a string. 

print(`specified number of char strring => ${str.slice(0, 6)}`);

// 7. hide email addresses to protect (ex. manoj....@gmail.com)

const hideEmail = (email) => {
    try {
        const splitEmail = email.split("@");
        let firstPart = splitEmail[0];
        let secoundPart = splitEmail[1];
        let avgOfFirstPart = firstPart.length / 2;
        firstPart = firstPart.substring(0, firstPart.length - avgOfFirstPart);
        let finalResult = firstPart.concat("...@", secoundPart);
        return finalResult;
    } catch (error) {
        return error.String;
    }
};

print(`hidden Email => ${hideEmail("manojjaiswal4@gmail.com")}`);

// 8. extract userName from email

const userNameFromEmail = (email) => {
    try {
        const splitEmail = email.split("@");
        return splitEmail[0];
    } catch (error) {
        return error.String;
    }
};

print(`User Name from Email => ${userNameFromEmail("manojjaiswal4@gmail.com")}`);


// 9. genrate otp 

const genrateOtp = (digit)=>{
    if(typeof(digit) == "undefined") return "number of digit requierd";
    try {
        let random = Math.random();
        const splitOtp =  random.toString().split(".");
        let otp = splitOtp[1].substring(0,digit);
        return otp;
    } catch (error) {
        return error.String;
    }
};

print(`Genrated Otp => ${genrateOtp(4)}`);

// 10. count of char in string 
	
	let countChar = (txt) => {
	let count = 1;
	for (let i = 0; i < txt.length; i++) {
		if (txt[i] === txt[i + 1]) {
		count++;
		} else {
		console.log(`${txt[i]} occur ${count} times`);
		count = 1;
		}
	}
	};
	
	countChar("hello");

