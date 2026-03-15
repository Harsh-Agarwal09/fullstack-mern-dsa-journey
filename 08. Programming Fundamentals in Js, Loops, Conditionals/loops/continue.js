// continue skips only the current iteration of the loop and proceeds to the next iteration.  It does not exit the loop, but bypasses the remaining code in the current cycle.
// Example: if (i === 3) continue; skips printing i when it equals 3, but continues with the next value.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}