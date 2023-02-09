const print = (txt) => console.log(txt + "\n");


// No Parameters: A date object will be set to the current date & time if no parameter is specified in the constructor.
const currentDate = new Date();
print(currentDate);

// value: An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC.
const date = new Date(2014);
const date1 = new Date(2014234234);
print(date);
print(date1);

// dateString: A string value that will be parsed using Date.parse() method.

let dateString = "3 February, 2015";
const parseDate = Date.parse(dateString);
print(parseDate);

dateString = new Date(parseDate);
print(dateString);

print(new Date(dateString));



// date with values (var date5 = new Date(2021, 2, 3, 10, 30, 50, 800); // Mon Feb 03 2021 10:30:50) 

const datestring = new Date(2014, 1, 2);
print(datestring);

var date2 = new Date(2021, 2, 3, 10, 30, 50, 800);
print(date2);

//Date Formats

print("==== Date Formats");

const dt = new Date('2023-02-10T10:12:50.5000z');

print(dt); // Fri Feb 10 2023 15:42:50 GMT+0530 (India Standard Time)

print(dt.toDateString()); // Fri Feb 10 2023

print(dt.toLocaleDateString()); // 10/02/2023

print(dt.toLocaleTimeString()); // 15:42:50

print(dt.toLocaleString()); // 10/02/2023, 15:42:50

print(dt.toTimeString()); // 15:42:50 GMT+0530 (India Standard Time)

print(dt.toString('YYYY-MM-dd')); // Fri Feb 10 2023 15:42:50 GMT+0530 (India Standard Time)

print(dt.toGMTString()); // Fri, 10 Feb 2023 10:12:50 GMT

print(dt.toISOString()); // 2023-02-10T10:12:50.500Z

print(dt.toUTCString()); // Fri, 10 Feb 2023 10:12:50 GMT

// Date Get Methods //

/*

getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)

*/

// Date Get Methods //

/*
 
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)

*/

