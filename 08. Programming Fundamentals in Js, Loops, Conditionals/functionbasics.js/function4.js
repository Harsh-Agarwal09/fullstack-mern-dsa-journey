const { cacheSignal } = require("react");

function isEvenOrOdd(x) {
    if(x % 2 == 0) {
        return "Even";
    } else {
        return"Odd";
    }
}

const ans = isEvenOrOdd(15);
console.log(ans);