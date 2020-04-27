//Template String
const title = "Lo mejor de lo mejor";
const author = 'Shury';
const likes = 30;

//Concatenation Way
let result = "El blog llamado "+title+" de "+author+" tiene "+likes+" likes";
console.log(result);

//Template String Way
let result2 = 'El blog llamado ${title} de ${author} tiene ${likes} likes';
console.log(result2);

//Creating html templates
let html="<h2>${title}</h2><p>By ${author}</p><span>este blog tiene ${likes} likes</span>";
console.log(html);

//ARRAY***************************************
let ninja = ["shaun", "ryu", "chum-li"]
console.log(ninja);
console.log(ninja[1]);
ninja[1]="ken";
console.log(ninja);

let ages=[20, 25, 30, 35];
console.log(ages[2]);

let random =["shaun", "crystal", 30, 20];
console.log(random);

console.log(ninja.length);

//Array Methods
//let resultado = ninja.join("-");
//let resultado= ninja.indexOf("chum-li");
//let resultado=ninja.concat(["ken, crystal"]);
//let resultado = ninja.push("chan");
let resultado= ninja.pop();
console.log(resultado);
console.log(ninja);

//NULOS E UNDEFINED*****************************
//let age;
let age = null;
console.log(age, age +3, "the age is ${age}");

//BOOLEANS************************************************
//booleans & comparasons
console.log(true, false, "true", "false");

//Methods can return booleans
let email = "shurai@gmail.com";
let names = ["luis", "mario", "angel"];

//let resultadito = email.includes("!");
let resultadito = names.includes("mario");
console.log(resultadito);

//comparison operators
let anio = 25;
console.log(anio==25);
console.log(anio==30);
console.log(anio!=30);
console.log(anio>20);
console.log(anio<20);
console.log(anio<=25);
console.log(anio>=25);


let name="luis";
console.log(name=="luis");
console.log(name>"Crystal");
console.log(name< "Crystal");


let agess =25
//loose comparison (diffrent types can still be equal)
//console.log(ages==25);
//console.log(ages=="25");
//console.log(agess!=25);
//console.log(agess!="25");
//console.log(agess)


//strict coparsion (different types cannot be equal)
//console.log(agess===25);
//console.log(agess==="25");
//console.log(agess!==25);
//console.log(agess!=="25");


//type conversion
let score = "100";
//score= Number(score);
//console.log(score+1);
//console.log(typeof score);

//let resultao = Number("helo");
//let resultao = String(50);
//let resultao = Boolean(100);
let resultao=Boolean("0");
console.log(resultao, typeof resultao);

