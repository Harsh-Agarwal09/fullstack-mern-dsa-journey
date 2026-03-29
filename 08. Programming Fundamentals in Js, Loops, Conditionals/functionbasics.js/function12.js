// Escape Sequences in Strings

const s1 = "Hello \n Harsh";

const s2 = 'Hiii \t Harsh';

const s3 = `Welcome Harsh`;

console.log(s1);
console.log(s2);
console.log(s3);

const s4 = `Hiii, "Harsh is a good student" also \`he is a good boy\` `;

console.log(s4);

console.log('Harsh' + 'Agarwal'); // String Concatenation -> It is an operation  that creates a new string by combining two or more strings together.

const firstname = 'Harsh';
firstname.concat(' Agarwal', ' is', ' a champ'); // It is a method that is used to concatenate two or more strings together and returns a new string.

const a = "abc";
const b = "def";
const c = "ghi";

// console.log(a + b + c);
let output = a + b + c;
console.log(output);