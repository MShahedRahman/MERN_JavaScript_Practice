//Simple FOR Loop
for(var i = 0; i<=5; i++)
{
    console.log(i);
}

// For..of Loop

var nameArray = ['Kamal', 'Jamal', 'Tomal', 'Malamal' ];

for(var oneName of nameArray)
{
    console.log(oneName);
}

var myCountry = ['Dhaka', 'Rangpur', 'Khulna', 'Barishal'];
for(let myCity of myCountry)
{
    console.log(myCity);
}

// While Loop 

var i =0;
while(i <=5)
{
    console.log("I am loving this");
    i++;
}

//For..in Loop 

var shoppingCard = {
    books:3, 
    sunglass:2, 
    keyboard:5, 
    mouse:1, 
    pen:25, 
    shoes:2
};

for(let propertyName in shoppingCard)
{
    var value=shoppingCard[propertyName]
    console.log(propertyName,value);
    
};

for(let propertyName in shoppingCard)
{
    var value=shoppingCard[propertyName]
    console.log(propertyName);
    console.log(value);
};

// Continue and Break Function 

var number = [45,87,89,56,32,51,25,188,41,25,98, 102];

for(var i=0; i< number.length; i++)
{
    if(number[i]< 100)
    {
        continue; 
    }
    else 
    {
        console.log(number[i]);
    }

};

for(var i=0; i< number.length; i++)
{
    if(number[i]> 100)
    {
        break; 
    }
    else 
    {
        console.log(number[i]);
    }

};