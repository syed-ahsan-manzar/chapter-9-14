var first = "Welcome to the Javascript WORLD!";
alert(first)

// CHAPTER 09 (prompt box):
var fullName = prompt("What is your full name?" , "Syed Ahsan Manzar");
var city = prompt("Which city do you live?" , "Karachi")
var profession = prompt("What is your profession?" , "Student")

console.log("My name is " + fullName);
console.log("I live in " + city);
console.log("I am a " + profession);

// CHAPTER 10 (if statements):
var age = prompt("Write your age to proceed your document? (UNDER 18 ARE NOT ALLOWED)");

if(age >= 18){
    console.log("you are eligible *PLEASE COME IN*");
}else{
    console.log("you are not eligible *KINDLY MAKE YOUR SELF GET OUT*");
}

// CHAPTER 11 (Comparison operators):
// CONDITION 01(==):
var a = 10;
var b = "10"

if(a == b){
    console.log("The value of A is equal to B");
}else{
    console.log("The value of A is not equal to B");
}

// CONDITION 02(===):
var a = 10;
var b = 10;

if(a === b){
    console.log("The value and the data type of A is equal to B");
}else{
    console.log("The value and the data type of A is not equal to B");
}

// CONDITION 03(!=):
var a = 10;
var b = 20;

if(a != b){
    console.log("The value of A is not equal to B");
}else{
    console.log("The value of A is equal to B");
}

// CONDITION 04(!==):
var a = 10;
var b = "20";

if(a !== b){
    console.log("The value and the data type of A is not equal to B");
}else{
    console.log("The value and the data type of A is equal to B");
}

// CONDITION 05(>):
var a = 35;
var b = 25;

if(a > b){
    console.log("A is greater than B");
}else{
    console.log("A is not greater than B");
}

// CONDITION 06(<):
var a = 35;
var b = 25;

if(b < a){
    console.log("B is less than A");
}else{
    console.log("B is not less than A");
}

// CONDITION 07(>=):
var a = 15;
var b = 15;

if(a >= b){
    console.log("A is greator than B");
}else{
    console.log("A is not greator than B");
}

// CONDITION 08(<=):
var a = 10;
var b = 15;

if(a <= b){
    console.log("A is less than B");
}else{
    console.log("A is not less than B");
}

// CHAPTER 12 (if...else and else if statements):
var a = prompt("Select any one number from (1 for CNIC , 2 for Student Card , 3 for No Card)");

if(a == 1){
    console.log("You are allowed because of CNIC!");
}else if(a == 2){
    console.log("You are allowed because of Student Card!");
}else{
    console.log("you are not allowed");
}

// CHAPTER 13 (Testing sets of conditions):
alert("Both male and female condidate are allowed (under 18):")
var age = prompt("What is yor age!");
var gender = prompt("What is your Gendar!");

if(age <= 18 && (gender == "male" || gender == "female")){
    console.log("you are allowed");
}else{
    console.log("you are not allowed");
}

// CHAPTER 14 (if statements nested):
var uni = prompt("Are you in uni. write (YES or NO)");
var a = prompt("write your year. If you have put (NO) so,then your FAIL");

if(uni == "yes"){
    if(a == "firstyear"){
        console.log("B grade");
    }else if(a == "secondyear"){
        console.log("A+ grade");
    }else if(a == "thirdyear"){
        console.log("E grade");
    }else if(a == "fourthyear"){
        console.log("A grade");
    }
}else{
    console.log("you are fail")
}

// CHAPTER 15 (PROMPT BOX):
var fruit = ["Apple","Banana","Mango","Orange","PineApple","Grapes"];
 
console.log("Please eat " + fruit[5])

// ASSIGNMENT (calculating the percentage)
var math            = + prompt("What is your marks out of 100 in (math). Write in the given box?", "Enter your marks here...");
var english         = + prompt("What is your marks out of 75 in (english). Write in the given box?", "Enter your marks here...");
var urdu            = + prompt("What is your marks out of 75 in (urdu). Write in the given box?", "Enter your marks here...");
var pakistanStudies = + prompt("What is your marks out of 75 in (p.st). Write in the given box?", "Enter your marks here...");
var physics         = + prompt("What is your marks out of 100 in (physics). Write in the given box?", "Enter your marks here...");
var chemistry       = + prompt("What is your marks out of 100 in (chemistry). Write in the given box?", "Enter your marks here...");

console.log("your Math            mark is :" + " " + math);
console.log("your English         mark is :" + " " + english);
console.log("your Urdu            mark is :" + " " + urdu);
console.log("your PakistanStudies mark is :" + " " + pakistanStudies);
console.log("your Physics         mark is :" + " " + physics);
console.log("your Chemistry       mark is :" + " " + chemistry);

var totalMarks = 525;

var totalAchieveMarks = math + english + urdu + pakistanStudies + physics + chemistry;

var per = totalAchieveMarks / totalMarks * 100;

console.log("your percentage is " + per + "%")

if (per >= 80 && per <= 100) {
    console.log("Marvellous " + "You have acchived A+ OR A1 grade.");
} else if (per >= 70 && per <= 79) {
    console.log("You have acchived A grade.");
} else if (per >= 60 && per <= 69) {
    console.log("You have acchived B grade.");
} else if (per >= 50 && per <= 59) {
    console.log("You have acchived C grade.");
} else if (per >= 40 && per <= 49) {
    console.log("You have acchived D grade.");
} else if (per >= 30 && per <= 39) {
    console.log("You have acchived E grade.");
} else {
    console.log("You are FAIL!.");
}