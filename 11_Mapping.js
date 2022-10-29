var myMap = new Map();

myMap.set('Key1', 'Bangladesh');
myMap.set('Key2', 'India');
myMap.set('Key3', 'China');
myMap.set('Key4', 'USA');
myMap.set('Key5', 'Canada');
myMap.set('Key6', 'Thailand');
myMap.set('Key7', 'Maldieves');

// Use of Get Function 

console.log(myMap.get('Key5'));

// Use of Clear Function 
/*myMap.clear();

for(let myvalue2 of myMap.values())
{
    console.log(myvalue2);
};

for(let mykey2 of myMap.keys())
{
    console.log(mykey2);
}
*/
console.log(myMap.values());
console.log(myMap.keys());

for(let myvalue of myMap.values())
{
    console.log(myvalue);
};

for(let mykey of myMap.keys())
{
    console.log(mykey);
}

// Use of Delete Function 
myMap.delete('Key1');
myMap.delete('Key2');

for(let myvalue1 of myMap.values())
{
    console.log(myvalue1);
};

for(let mykey1 of myMap.keys())
{
    console.log(mykey1);
}

// Use of Has Function 

if(myMap.has('Key1'))
{
    console.log("Yes");
}
else 
{
    console.log("No");

}







