// Break and continue are control flow statements used in JavaScript loops to alter their execution. 

// break immediately terminates the entire loop, exiting it completely.  It is commonly used when a specific condition is met and further iterations are unnecessary.
// Example: if (i === 5) break; stops the loop as soon as i reaches 5. 
 
// Key Difference:

// break stops the loop entirely.
// continue skips only the current iteration and continues the loop.

let i = 1;

while (i <= 10) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i += 1;
}