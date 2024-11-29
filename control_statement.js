let mark = 91;

if(mark>=91 || mark==100){
console.log(`${mark}"=> Great your O grade"`);
}
else if(mark>=81 &&  mark<91){
    console.log(`${mark}"congrats your A grade"`);
}
else if(mark>=71 && mark<81){
console.log(`${mark}"good your B grade"`);
}
else if(mark>=51 && mark<71){
console.log(`${mark}"Your Grade is C"`);
}
else if( mark>=35 && mark<51 ){
console.log(`${mark}"YOUR PASS"`);
}
else{
    console.log("FAILLLL");
}



//Task1

function checkNumber(number,minRange=1,maxRaange=100){

if(number<minRange || number>maxRaange){
    console.log(`${number}=>is a out of range 1 to 100 `);
}
else if(number%2==0){
console.log(`${number} its a even number`);
}
else if(number%2!=0){
    console.log(`${number} its a odd number`);
    }

}


let number = Number(prompt("enter your number"));

if (isNaN(number)){
    console.log("invalid input");
}
else{
    console.log(checkNumber(number))
}




////Task 2


function calculater(num_1,num_2,operation){
    if(operation=="add"){
        console.log(num_1+num_2);
    }
    else if(operation=="sub"){
        console.log(num_1-num_2);
    }
    else if(operation=="mult"){
        console.log(num_1*num_2);
    }
    else if(operation=="div"){
        console.log(num_1/num_2);
    }
}
let num_1 = Number(prompt("ENTER YOUR FIRST NUMBER"));
let num_2 = Number(prompt("ENTER YOUR SECOND NUMBER"));
let operation = String(prompt("ENTER YOUR OPERATION"));

if(isNaN(num_1 && num_2)){
console.log("NVALID OUTPUT");
}
else{
    console.log(calculater(num_1,num_2,operation))
}


//Task3

function check_Num_Type(num_1){
if(num_1>=0 && num_1>100 ){
    console.log(`${num_1} positive and greatethen 100`);
} 
else if(num_1>=0 && num_1==100  ){
    console.log(`${num_1} positive and equal to 100`);
} 
else if(num_1>=0 && num_1<100  ){
    console.log(`${num_1} positive and lessthen 100`);
} 
else if(num_1<0){
    console.log(`${num_1} ITS negative number` );
} 
}
let num_1 = Number(prompt("ENTER YOUR NUMBER"));

if(isNaN(num_1)){
    console.log("INVALID INPUT");
}
else{
    console.log(check_Num_Type(num_1))
}



//Task 4 



function campare_Numbers(num_1,num_2){
    if(num_1==num_2){
        console.log(`${num_1} And ${num_2} is eqaul `);
    }
    else if(num_1>num_2){
        console.log(`${num_1} Greaterthen ${num_2} `);
    }
    else if(num_1<num_2){
        console.log(`${num_1} lessthen ${num_2} `);
    }
}

let num_1 = Number(prompt("ENTER YOUR FIRST NUMBER"));
let num_2 = Number(prompt("ENTER YOUR SECOND NUMBER"))


if(isNaN(num_1&&num_2)){
    console.log("INVALID OUTPUT");
}
else{
    console.log(campare_Numbers(num_1,num_2));
}


//Task 5

function light_color_check(light_color){

    if(light_color=="red"){
        console.log("Stop");
    }
    else if(light_color=="green"){
        console.log("Gooo...!");
    }
    else if(light_color=="orange"){
        console.log("GET REDY");
    }
    else{
        console.log("Invalid");
    }
}
let light_color = String(prompt("ENTER YOUR LIGHT COLOR"))
let light = light_color_check(light_color.toLocaleLowerCase())



/////TASK6

function identify_shape(shape){
    if(shape==3){
        console.log(`${shape} => TRIANGLE`);
    }
    else if(shape==4){
        console.log(`${shape} => Quadrilateral`);
    }
    else if(shape==5){
        console.log(`${shape} => Pentagon`);
    }
    else{
        console.log("INVALID SHAPE");
    }
}


let shape = Number(prompt("ENTER YOUR SIDES"));

let shape_check = identify_shape(shape)


//Task 7

function discount_checker(amount) {

    if (amount >= 5000) {
        console.log(`AMOUNT IS ${amount}=>20%  DISCOUNT`);
    }
    else if (amount > 2000 && amount < 5000) {
        console.log(`AMOUNT IS ${amount}=>10%  DISCOUNT`);
    }

    else if (amount > 2000 && amount < 5000) {
        console.log(`AMOUNT IS ${amount}=>10%  DISCOUNT`);
    }
    else{
        console.log("INVALID INPUT");
    }
}



let amount = Number((prompt("ENTER YOUR AMOUNT")));

let discount_caller = discount_checker(amount);






//TASK 8

function leap_checker(year){
    if(year%400==0){
        console.log(`${year}=>it is a Lep year`);
    }
    else if(year%100==0 && year%400!==0){
        console.log(`${year}=>it is Not a Lep year`);  
    }
    else if(year%4==0 && year%100!==0){
        console.log(`${year}=>it is a Lep year`);  
    }
    else{
        console.log("ENTER VALID INPUT");
    }
}





let year = Number(prompt("ENTER THE YEAR IN NUMBER"))

let leap = leap_checker(year)



//Task 9 

function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} is divisible by both 3 and 5.`);
    } else if (num % 3 === 0) {
        console.log(`${num} is divisible by 3.`);
    } else if (num % 5 === 0) {
       console.log(`${num} is divisible by 5.`);
    } else {
        console.log( `${num} is not divisible by 3 or 5.`);
    }
}

let divi = Number(prompt("Enter a number:"));
let call_cheker = checkDivisibility(divi);






//TASK 10

let initial_value = Number(prompt("ENTER "));
let time = Number(prompt("enter time"));
if(initial_value>0 && time>0){
    if (10000 < initial_value) {
        let percentage = 10;
        let interst_amount = (initial_value * time * percentage) / 100;
        console.log(`interst value is${interst_amount} total amount=>${initial_value * interst_amount}`);
    }
    else if (10000 >= initial_value && 30000<=initial_value) {
        let percentage = 7;
        let interst_amount = (initial_value * time * percentage) / 100;
        console.log(`interst value is${interst_amount} total amount=>${initial_value * interst_amount}`);
    }
    else if (30000 >= initial_value && 50000<=initial_value) {
        let percentage = 5;
        let interst_amount = (initial_value * time * percentage) / 100;
        console.log(`interst value is${interst_amount} total amount=>${initial_value * interst_amount}`);
    }
    else if (50000>initial_value) {
        let percentage = 3;
        let interst_amount = (initial_value * time * percentage) / 100;
        console.log(`interst value is${interst_amount} total amount=>${initial_value * interst_amount}`);
    }
}

else {
    console.log("Please ENTER VALUE NUMBER");
}

//switch task

let mark = Number(prompt("ENTER YOUR MARK"));

switch (mark>0){
    case (mark>=91 && mark<=100):
        console.log("CONGRATS YOUR A GRADE");
        break;
    case (mark>=71 && mark<91):
        console.log("CONGRATS YOUR B GRADE");
        break;
    case (mark>=51 && mark<71):
        console.log("CONGRATS YOUR C GRADE");
        break;
    case (mark>=35 && mark<51):
        console.log("CONGRATS YOUR PASS");
        break;
    case (mark>=0 && mark<35):
        console.log("SORRY! YOUR FAIL");
        break;
    default:
        console.log("invalid input");
}