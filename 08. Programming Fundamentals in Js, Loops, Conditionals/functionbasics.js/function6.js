function add(x, y = 5, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x = y + z;
}

console.log(add(7, 45, 18))