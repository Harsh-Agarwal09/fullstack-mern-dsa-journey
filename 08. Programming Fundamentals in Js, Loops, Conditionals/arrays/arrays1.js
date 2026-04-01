let arr1 = []; //empty array
let arr2 = ["harsh", true, -5, null, 45.264];

console.log(arr1, arr2);

console.log(arr2[3]); //accessing the 4th element of the array at an index of 3

arr1[0] = "shubh"; //we can update elements to an array by using the index of the element we want to update
console.log(arr1);

arr1[10] = "javascript"; //we can also add elements to an array by using the index of the element we want to add
console.log(arr1); //this will create empty elements in the array from index 1 to 9 and add "javascript" at index 10

let arr3 = new Array(5, 10, 15, 20); //filling an array using the Array constructor with the elements as arguments
console.log(arr3);

let arr4 = new Array(5); //filled with undefined values
console.log(arr4);

let arr5 = new Array(5).fill(45); //filled with 45   values