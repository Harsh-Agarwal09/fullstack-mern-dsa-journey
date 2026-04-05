// Given a value n (positive integer), print the following pattern on the screen.

/* For example, if n = 5, the pattern will be:
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function pattern(n) {
  // Logic for printing the pattern
  for (row = 1; row <= n; row++) {
    let str = "";
    for (col = 1; col <= row; col++) {
      str += "* ";
    }
    console.log(str);
  }
}
pattern(5);
