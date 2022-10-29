var isGraduate = true; 
var salary = 75000; 
var cars = 1; 

if(isGraduate == true && salary > 50000 && cars >=1)
{
    console.log("Selected");
}
else{
    console.log("Not Selected");
}

if(isGraduate == true || salary > 50000 || cars >=1)
{
    console.log("Not Selected");
}
else{
    console.log("Selected");
}