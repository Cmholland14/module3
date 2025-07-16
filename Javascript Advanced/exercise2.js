//a - 4,3,2,1 - the tests will appear in order 

//b  Rewrite delayMsg as an arrow function  // c) Add a fifth test which uses a large delay time (greater than 10 seconds)

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout( () => delayMsg('#1: Delayed by 100ms'), 100);
setTimeout( () => delayMsg('#1: Delayed by 50ms'), 50);
setTimeout( () => delayMsg('#2: Delayed by 20ms'), 20);
setTimeout( () => delayMsg( '#3: Delayed by 0ms'), 0);
delayMsg( () => '#4: Not delayed at all')


// d) Use clearTimeout to prevent the fifth test from printing at all.

const timeoutID = setTimeout(() => delayMsg('#5: This will not print'), 100);
clearTimeout(timeoutID);