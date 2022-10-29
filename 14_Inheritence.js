// Class Inheritance with super keyword 

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
    
    demo(){
        super.hello_1();
        super.hello_2();
    }

};

var obj_child = new Child();
obj_child.hello_1(); //Method Overriding
obj_child.hello_2();
obj_child.hello_3();

obj_child.demo(); // using super keyword 

var obj_parent = new Parent();
obj_parent.hello_1();
obj_parent.hello_2();

// Super Keyword 

