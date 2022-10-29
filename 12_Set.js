//Set do not contain Duplicate values

var mySet = new Set();

mySet.add('Bangladesh');
mySet.add('India');
mySet.add('China');
mySet.add('India');
mySet.add('Canada');
mySet.add('Thailand');
mySet.add('Maldieves');

// Determining Set Size 

console.log(mySet.size);

//console.log(mySet);

// Using clear method 
/*
mySet.clear();
console.log(mySet);
*/

// Using delete method 

mySet.delete('China');
console.log(mySet);

//Using values method 

console.log(mySet.values());

//Using has method 

if(mySet.has('Bangladesh'))
{
    console.log("Yes");
}
else{
    console.log("No");
}