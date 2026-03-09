let a =7;
let b = 7;
let c = 7;

if(a==b && b==c){
    console.log("Equilateral Triangle");
} else if(a==b || b==c || a==c){
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}