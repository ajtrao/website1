// if, else if, else
/*For loop syntax:-
for(statement1; statement2; statement3){}
	statement1= variable intialization
	statement 2=condition
	statement 3 = increment or decrement
}*/

// example 1
for (var num=0 ; num<10 ; num++ ){
	console.log(num);
}

//example 2
for(i=1 ; i<5 ; i++){
	console.log("hello");
}

//ex3
let sum=0;
for(  i=1 ; i <= 10 ; i++ ){
	sum = sum + i;
	console.log(sum);
}

//ex4
let numbers = [2, -5, 13, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
   total += numbers[i];
}
console.log(total);

//ex5
var num=[9,8,7,6,5,4] ;
for(let index=0 ; index<=num.length-1 ; index++){
    console.log(num[index]);
}

//ex6
var num=[9,8,7,6,5,4] ;
console.log( num.length );

// if we want to print all the values in the array we need to use array.length-1



////////// for of for in loops
var array=[1,2,3,4,5];
for(let x of array){
    console.log( x );
}
console.log("------------------------");
var array=[1,2,3,4,5];
for(let x in array){
    console.log( array[x] );
}
console.log("------------------------");
var cus={
    "name":"ajith",
    "salary": 9000
}
for (let x in cus){
    console.log(cus[x]);
}

// for of is not iteratable---- won't provide index values
// for in is iteratable/ used for objects--- provides the index values

var array_1=[1,2,3,4,5];
for(const x in array_1){
    console.log( array_1[x] );}
    
var array_2=[1,2,3,4,5];
for(const x of array_2){
    console.log( array_2[x] );}

