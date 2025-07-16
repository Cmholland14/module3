// a

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

//b 


function makeCounter(startFrom =0) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

//c 

function makeCounter(startFrom =0, incrementBy=1) {
  let currentCount = startFrom;
  return function () {
    currentCount+= incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}