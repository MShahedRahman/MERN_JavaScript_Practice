class MyClass_1{
    myFunc1() {
        console.log("Hello, I am from function_1 inside class");        
    };

    myFunc2() {
        console.log("Hello, I am from function_2 inside class");        
    }

    myFunc3() {
        console.log("Hello, I am from function_3 inside class");        
    }

    myFunc4() {
        console.log("Hello, I am from function_4 inside class");        
    }
}

var obj1 = new MyClass_1;
obj1.myFunc1();
obj1.myFunc2();
obj1.myFunc3();
obj1.myFunc4();

// 

class MyClass_2{
    myFunc21(w) {
        console.log(w);        
    };

    myFunc22(x) {
        console.log(x);        
    }

    myFunc23(y) {
        console.log(y);        
    }

    myFunc24(z) {
        console.log(z);        
    }
}

var obj2 = new MyClass_2;
obj2.myFunc21("Hello, I am from function_21 inside class");
obj2.myFunc22("Hello, I am from function_22 inside class");
obj2.myFunc23("Hello, I am from function_23 inside class");
obj2.myFunc24("Hello, I am from function_24 inside class");

//Class Constractor

class MyClass_3{
    constructor(){
        console.log("Hi, I am from Constructor Class");
    }
}

new MyClass_3();

//Class Constractor with parameter

class MyClass_4{
    constructor(a,b){
        console.log(a+b);   
        this.firstNum = a; 
        this.secondNum = b; 
    }

    add(){
        let result = this.firstNum + this.secondNum; 
        console.log(result);
    }
}

var obj4 = new MyClass_4(10,20);
obj4.add();

// Static Properties of the class 

class MyClass_5{
    hello(){
        console.log("Hello, I am from a non-Static method");
    }
}

var obj5 = new MyClass_5();
obj5.hello(); // Non-Static method has direct relation with Class object 

class MyClass_6{
    static hello_1(){
        console.log("Hello, I am from a Static method");
    }
}

MyClass_6.hello_1(); //Static method has direct relation with Class 

// Class Inheritance

class Parent{
    hello_1(params) {
        console.log("Hello_1, I am from Parent Class");     
    }

    hello_2(params) {
        console.log("Hello_2, I am from Parent Class");     
    } 

}

class Child extends Parent{
    hello_3(params) {
        console.log("Hello_3, I am from Child Class");     
    }

    // Method Overridding
    hello_1(params) {
        console.log("Hello_1, I am modified by Child Class");     
    }
  

};

var obj_child = new Child();
obj_child.hello_1(); //Method Overriding
obj_child.hello_2();
obj_child.hello_3();

var obj_parent = new Parent();
obj_parent.hello_1();
obj_parent.hello_2();



