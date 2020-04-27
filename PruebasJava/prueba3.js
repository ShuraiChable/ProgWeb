


//function expression
/*const speak = function(){
    console.log("Buen dia");
}

greet();
greet();
greet();

speak();

//Function declaration
function greet(){
    console.log("hellow");
}*/

//arguments & parameters
/*const speak = function(name= "luis", time="night"){
    console.log("Buen dia "+ time + name);
};*/
/*speak();
speak("dia", "Andres");*/

//returning values
/*const calcArea = function(radio){
    //let area = 3.14*radio**2;
    //return area;
    return 3.14*radio**2;
}
const area = calcArea(5);
console.log(area);

const calcvolumen = function(area){
}
calcvolumen(area);*/

//regular function
/*const calcArea = function(radio){
    return 3.14*radio**2;
}*/
//arrow function

const calcArea = radio=> 3.14*radio**2;

const area = calcArea(5);
console.log(area);