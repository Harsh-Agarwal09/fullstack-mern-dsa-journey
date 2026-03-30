// In JS Functions are first class citizen
// In JS Functions can be returned from a function and function can be passed as an argument to another function
function someFunction() {
    // Computation
    return function x() {
        return 10;
    }
}

function anotherFunction(f1) {
    f1();
    console.log("Call f1");
}

function hello() {
    console.log('hello');
}

anotherFunction(hello);
// hello is passed as an argument and hello() is passed with return keyword or else it will show undefined.