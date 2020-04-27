//FOR LOOPS*********************************
//******************************************
/*for(let i=0; i<5;i++){
    console.log("in loop", i);
}
console.log("loop finish");*/

const nombres = ["luis", "mario", "javier"];
/*for (let i=0; i<nombres.length; i++){
    //console.log(nombres[i]);
    let html = '<div>'+nombres[i]+'</div>';
    console.log(html);
}*/

//WHILE LOOP********************************
//******************************************
let i =0;
/*while(i<5){
    console.log("in loop: ", i);
    i++;
}*/

while(i<nombres.length){
    console.log(nombres[i]);
    i++;
}

//DO WHILE LOOP******************************
//******************************************* 
do{
    console.log("val of i is ", i);
    i++;
}
while(i<5);

//IF STATEMENTS********************************
//*********************************************
/*const age = 20;
if(age>20){
    console.log("You are over 20 years old");
}

const ninja =["Juan", "Artemio", "Luis"];
if (ninja.length>3){
    console.log("That´s a lot of ninjas");
}*/

const password = "p@ssword1234";
if (password.length>=12 && password.includes("@")){
    console.log("that password is might strong")
}else if(password.length>=8 || password.includes("@") && password.length>5){
    console.log("that password is long enough!");
}else{
    console.log("password is not long enough")
}

//LOGICAL NOT!********************************
//********************************************
let user = false;
if(!user){
 console.log("You must be logged in to continue")
}
console.log(!true);
console.log(!false);

//BREAK AND CONTINUE
const score = [50, 25, 0, 30, 100, 20, 10];
for(let j=0; j<score.length;j++){
    if(score[j]===0){
        continue;
    }
    console.log("your score: ", score[j]);
    if(score[j]===100){
        console.log("Felicidades");
        break;
    }
}

//SWITCH STATEMENTS***************************
//********************************************
const grande="D";
switch(grande){
    case "A":
        console.log("You got an A!");
        break;
    case "B":
        console.log("You got an B!");
        break;
    case "C":
        console.log("You got an C!");
        break;
    case "D":
        console.log("You got an D!");
        break;
    case "E":
        console.log("You got an E!");
        break;
    default:
        console.log("not a valid grande");
}
//using if statements
/*if(grande==="A"){

}else if(grande==="B"){
    
}else if(grande==="C"){
    
}else if(grande==="D"){
    
}else if(grande==="E"){
    
}else if(grande==="F"){
    
}*/

//VARIABLES & BLOCK SCOPE
let ages = 30;
if(true){
    let ages = 40;
    let name = "Sharon";
console.log("insisde 1st code block", ages, name);
if (true){
    let ages = 50;
    console.log("inside second block", ages);
    var test = "hello";
}
}
console.log("outside code block: ", ages, name, test);