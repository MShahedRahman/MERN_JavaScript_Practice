var friendName = ['Karim', 'Rahim', 'Kashem'];
var playerAge = [18,21,31,23,45,55,16];

console.log(friendName);
console.log(playerAge);
console.log(playerAge.indexOf(31)+1);

//playerAge[4] =42;
console.log(playerAge.indexOf(45));
playerAge[4] =42;
console.log(playerAge);

var myArray = ['A','B','C','D','E'];
var myArrayPro = new Array('A','B','C','D','E');

console.log(myArray[1]);
console.log(myArrayPro[1]);

for (let item of myArray)
{
    console.log(item);
};

for (let item of myArrayPro)
{
    console.log(item);
};

// Multi-Dimentional Array 

var Bangladesh = ['Dhaka', 'Rangpur', 'CTG'];
var India = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
var China = ['Uhan', 'Shanghai', 'HongKong'];

var Asia = [Bangladesh, India, China];
console.log(Asia);

console.log(Asia[1][2]);
console.log(Asia[0][0]);

// Array De-Structuring

var countries = ['Bangladesh', 'India', 'Canada', 'China'];
var[a,,c,] = countries;
console.log(c);