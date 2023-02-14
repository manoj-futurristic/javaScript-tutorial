const print = (txt) => console.log(txt + '\n');




// Math.round(x)	Returns x rounded to its nearest integer
print(Math.round(4.5));
print(Math.round(4.2));

// Math.ceil(x)	Returns x rounded up to its nearest integer
print(Math.ceil(4.1));
print(Math.ceil(4.7));

// Math.floor(x)	Returns x rounded down to its nearest integer\
print(Math.floor(14.5));
print(Math.floor(14.2));

// Math.trunc(x)	Returns the integer part of x (new in ES6)
print(Math.trunc(14.5));
print(Math.trunc(14.2));


// Math.pow(x, y) returns the value of x to the power of y:
print(`power => ${Math.pow(4,2)}`);

// Math.sqrt(x) returns the square root of x:
print(`sqrt => ${Math.sqrt(64)}`);

// Math.abs(x) returns the absolute (positive) value of x:
print(`abs => ${Math.abs(-4.5)}`);

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

print(`MAX => ${Math.max(1,2,3,4,5,5,56,6)}`);
print(`MIN => ${Math.min(1,2,3,4,5,5,56,6)}`);


function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

print(random(1, 10000));



const fav = (start, end, length) =>{
  let i,sum;
  const ser = [];
  for(i=0;i<length;i++){
    ser.push(start);
    sum = start + end;
    start=end;
    end = sum;
  }
  print(ser);
};

fav(0,1,10);
