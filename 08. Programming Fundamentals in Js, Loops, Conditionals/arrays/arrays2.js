let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.length); // length is not a function it is a property/key of array

arr.push(11); // adds an element at the end of the array
console.log(arr);

arr.pop(); // removes the last element of the array
console.log(arr);

arr.shift(); // removes the first element of the array
console.log(arr);

arr.unshift(0); // adds an element at the beginning of the array
console.log(arr);

arr.reverse(); // reverses the order of the elements in the array
console.log(arr);

console.log(arr.indexOf(100)); //returns of the index of the element if it is present in the array otherwise returns -1

console.log(arr.includes(5)); // returns true if the element is present in the array otherwise returns false