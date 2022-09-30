// examples of the functions

function firstFunction(x){
    return x*10;
 }
 let output =firstFunction(5);
 console.log(output);
 
 
 function toCelsius(f) {
   return (5/9) * (f-32);
 }
 console.log(toCelsius(77));
 
 
 function sum(){
     let a= 5;
     let b=10;
     let c= a+b;
     console.log(c);
 }
 sum();
 function printNumbers(x,y){
	for(var i=x;i<=y;i++){
	console.log (i) ;
		}
    }
printNumbers(5,10);


function printEvenNumbers(x,y){
    for(var i=x; i<=y; i=i+2){
     console.log(i)   
    }
}
printEvenNumbers(0,10);

// more examples
function myFunction(name,job) {
 for(var i=x; i<=y; i=i+2){
}


//sum of first 10 numbers
function somOfNum(x,y,z){
var output=x;
for (var i=y; i<=z ;i++ ){
    output = output+i;
}
console.log(output);
}
somOfNum(0,0,10);

// sum of the first 10 even numbers
function printEvenNumbers(x,y){
    var sum =0;
    for(var i=x; i<=y; i=i+2){
     sum=sum+i;
     console.log(sum);
    }
}
printEvenNumbers(0,10);


// sum of first 10 odd numbers
function printOddNumbers(x,y,z){
    var sum =x;
    for(var i=y; i<=z; i=i+2){
     sum=sum+i;
    }    
console.log(sum);
}
printOddNumbers(0,1,10);

// sum of first 10 odd numbers using return statement
function printOddNumbers(x,y,z){
    var sum =x;
    for(var i=y; i<=z; i=i+2){
     sum=sum+i;
    }
    return sum;
}
var odd =(printOddNumbers(0,1,10));
console.log(odd);
 
 