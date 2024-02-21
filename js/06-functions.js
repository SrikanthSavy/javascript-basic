console.log("Addition", add(3,4))
//Error
/// console.log("Multiplication",multiply(3,4)) // Throws an error 

function add(a,b){
    return a+b
}

// variable way of creating function
var multiply = function(a,b){
    return a*b
}

//Arrow way of defining function 
var result = (x,y) => x + y;
console.log("arrow function: ",result(10,20))
//or
var result = (i,j) => {
    return i - j;
};
console.log("arrow function: ",result(10,20))



console.log(multiply(3,4))