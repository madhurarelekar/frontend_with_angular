// function
function printMessage() {
    console.log("hi");
}
// returning function 
function getMessage() {
    return "hi";
}
// parameterized function
function sayHello(user_name) {
    return "hello" + user_name;
}
function sayHello1(user_name) {
    console.log("hello" + user_name);
}
// invoking function
printMessage();
var msg = getMessage();
console.log(msg);
console.log(getMessage());
sayHello("john");
console.log(sayHello("john"));
