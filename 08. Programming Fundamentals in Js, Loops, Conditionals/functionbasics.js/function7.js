function fun(...values) {
    // ...value represents rest parameters
    console.log(values);
}

fun(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]