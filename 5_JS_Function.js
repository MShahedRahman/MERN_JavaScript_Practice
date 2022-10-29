function myFunc(){
    var name = "ECMAScript 6"; 
    console.log(name);

}

var name1 = "ECMAScript 6"; 
console.log(name1);
myFunc();

// REST Parameter Function 

function something(...x)
{
    console.log(x);
    console.log(x[4]);
};

something(1,2,3,4,5,6,7,8,9,10, 'A', 'B', 'C');


//Anonymous Function 

var anonFunc = function()
{
    console.log("My First Annonymous Function");
}

anonFunc();

//Anonymous Function with REST Parameter

var anonFunc1 = function(...x)
{
    console.log(x);
}

anonFunc1(1,2,3,4);

//Arrow Function 

var myArrow = ()=>{
    console.log("My First Arrow Function");
}

myArrow();

//Arrow Function with REST parameter

var myArrow1 = (...x)=>{
    console.log(x);
}

myArrow1(1,2,3,4,5,6,7);

