// Write a program to print all the even numbers greater than 1 and less than 25.

// For Loop
for(let i = 2; i < 25; i+=2) {
console.log(i);
}

// For loop with if-else
for(let i = 2; i < 25; i++) {
    if(i%2 ==0) {
        console.log(i)
    } 
}

// While Loop using if-else
let j = 2;
while(j<=25) {
    if(j%2 == 0) {
        console.log(j);
    }
    j++;
}