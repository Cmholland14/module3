// a. toFixed function returns a string, not a number. It concatenates the two strings. 

// b.


function currencyOperation(float1, float2, operation, decimals = 2) {
    const factor = Math.pow(10, decimals);
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);
    let resultInt;

    switch (operation) {
        case '+':
            resultInt = int1 + int2;
            break;
        case '-':
            resultInt = int1 - int2;
            break;
        case '*':
            
            resultInt = Math.round((int1 * int2) / factor);
            break;
        case '/':
            if (int2 === 0) throw new Error("Division by zero");
            resultInt = Math.round((int1 / int2) * factor);
            break;
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }

    return resultInt / factor;
}


console.log(currencyOperation(0.1, 0.2, '+')); 
console.log(currencyOperation(0.1, 0.2, '*')); 
console.log(currencyOperation(0.2, 0.2, '-')); 
