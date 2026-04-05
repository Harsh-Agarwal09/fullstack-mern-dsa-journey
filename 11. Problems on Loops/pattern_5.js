// Given a value n (positive integer), print the following pattern on the screen.

// For example, if n = 5, the pattern will be:

/*
* * * * *
* * * *
* * *
* *
*
*/

function pattern(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}
pattern(5);