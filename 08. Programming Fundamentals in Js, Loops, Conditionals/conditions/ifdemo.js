console.log("Starting.....");
let isUserSignedIn = true; //this denotes that user is signed in to the app
let isPaidUser = true;

if (isUserSignedIn == true && isPaidUser == true) {
    //this particular block of code will execute only when both the conditions are true
    console.log("Show the dashboard");
} else {
   console.log("Show the homepage"); 
}

console.log("End.....");