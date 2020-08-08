
var money, name;

name = "Chetan";
money = 1000;

document.write("Hello World! from javascript -  this is from hello.js");

function sayHello(name) {
    //alert("Hello World " + name + " " + money);
}


// Global Variable vs local variable

var myVar = "global";      // Declare a global variable

function checkscope() {
    var myVar = "local";    // Declare a local variable
    document.write("<br /> Variable scope: " + myVar);
}

sayHello(name);
checkscope();

// operators

var a = 33;
var b = 10;
var c = "Test";
var linebreak = "<br />";

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);


var age = 20;

if (age > 18) {
    document.write("<b>Qualifies for driving</b>");
} else {
    document.write("<b>Does not qualify for driving</b>");
}