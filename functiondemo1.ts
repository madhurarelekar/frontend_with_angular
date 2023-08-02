
// function
function printMessage(){
    console.log("hi");
}

// returning function 

function getMessage() : string {
    return "hi"
}

// parameterized function

function sayHello(user_name:string):string{
    return "hello" + user_name
}

function sayHello1(user_name:string):void{
    console.log ("hello" + user_name);
}

// invoking function

printMessage();
var msg :string =getMessage();
console.log(msg)
console.log(getMessage());
sayHello("john")
console.log(sayHello("john"));

