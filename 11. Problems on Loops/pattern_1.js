// Given a value n (positive integer), print the following pattern on the screen.

/* For example, if n = 5, the pattern will be:
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
function pattern(n) {
  // Logic for printing the pattern

  // Write a loop to repeat a task for n rows
  for (let row = 1; row <= n; row++) {
    // Task
    // The task is to concatenate "*" n times
    let str = "";
    for (let col = 1; col <= n; col++) {
      str += "* ";
    }
    console.log(str);
  }
}
pattern(5);