/*alert("hello word");
console.log(1);
console.log(2);*/
let age =25;
let year = 2020;
console.log(age, year);

age=30;
console.log(age);

const points = 100;
//points= 50; //Imprime error porque es una constante
console.log(points);

var score = 75;
console.log(score);


//CADENAS*****************************************

//String
console.log("hola mundo");
let email = ("shuraichable.07@gmailcom");
console.log(email);

//String Concatenacion
let firsname = "Shury";
let lasname ="Chable";
let fullname = firsname+' '+lasname;
console.log(fullname);

//Getting characters
console.log(fullname[0]);
console.log(fullname[3]);

//String Length
console.log(fullname.length);

//String Methods
console.log(fullname.toUpperCase());//toUpperCase vuelve todo a mayúsculas
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf("@");
console.log(index);

//Common String Methods
//let resultado = email.lastIndexOf("a"); //lastIndexOf muestra el indice de la ultima 'a'
//let resultado=email.slice(2,10); // muestra del indece 0 al 10
//let resultado = email.substr(7,9); //muestra desde el indice 7 y lo toma como el inicial
//let resultado = email.replace("a", "w"); //remplaza la primera 'a' que encuentra por 'w'
//console.log(resultado);

//NÜMEROS*****************************************************
let radius = 10;
const pi = 3.14;
//console.log(radius, pi);

//math operators +, -, *, /, **, %
//console.log(10/2);
//let newresult = radius%3;
//let newresult = pi * radius**2;

//order of operation -BIDMAS
let newresult = 5*(10-3)**2;
console.log(newresult);

let likes = 10;
//likes= likes+1;
//likes++;
//likes--;
//likes+=10;
//likes*=2
//likes-=5;
likes/=2;

console.log(likes);


//NaN - not a number
//console.log(5/"hola");

let result2 = "the blog has " + likes + " likes";
console.log(result2);

