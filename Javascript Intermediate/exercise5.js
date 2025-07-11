// a. toFixed function returns a string, not a number. It concatenates the two strings. 

// b.


function currencyAddition(float1, float2) {
const factor = 100;
const int1 = Math.round(float1 * factor);
const int2 = Math.round(float2 * factor);
const sum = int1 + int2;
return sum / factor;
}

function currencyOperation(float1, float2, operation) {
const factor = 100;
const int1 = Math.round(float1 * factor);
const int2 = Math.round(float2 * factor);
const sum = int1 + int2;
return sum / factor;
}


console.log(currencyAddition(0.1, 0.2));
console.log(currencyOperation(0.1, 0.2, '*'));
console.log(currencyOperation(0.2, 0.2, '-'));