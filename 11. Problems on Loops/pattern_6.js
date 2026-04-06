// Given a value n (positive integer), print the following pattern on the screen.

// For example, if n = 5, the pattern will be:

/*
         *
       * * *
     * * * * *
   * * * * * * *
 * * * * * * * * *
   * * * * * * *
     * * * * *
       * * *
         *
*/

function pattern(n) {
    // upper half of the pattern
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n - i; j++) {
            str += '  ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += '* ';
        }
        console.log(str);
    }
    // lower half of the pattern
    for (let i = n - 1; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= n - i; j++) {
            str += '  ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += '* ';
        }
        console.log(str);
    }

}
pattern(5);