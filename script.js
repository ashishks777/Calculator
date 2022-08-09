var ac = document.getElementById("ac");
var sign = document.getElementById("sign");
var percent = document.getElementById("percent");
var divide = document.getElementById("divide");

var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multiply = document.getElementById("multiply");

var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var subtract = document.getElementById("subtract");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var add = document.getElementById("add");

var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var equal = document.getElementById("equal");

var io = document.getElementById("io");
var input = "";

ac.addEventListener('click', function () {
    input = "";
    io.innerText = "";

});

one.addEventListener('click', function () {
    input += "1";
    io.innerText = input;

});
two.addEventListener('click', function () {
    input += "2";
    io.innerText = input;

});
three.addEventListener('click', function () {
    input += "3";
    io.innerText = input;

});
four.addEventListener('click', function () {
    input += "4";
    io.innerText = input;

});
five.addEventListener('click', function () {
    input += "5";
    io.innerText = input;

});
six.addEventListener('click', function () {
    input += "6";
    io.innerText = input;

});
seven.addEventListener('click', function () {
    input += "7";
    io.innerText = input;

});
eight.addEventListener('click', function () {
    input += "8";
    io.innerText = input;

});
nine.addEventListener('click', function () {
    input += "9";
    io.innerText = input;

});
zero.addEventListener('click', function () {
    input += "0";
    io.innerText = input;

});
dot.addEventListener('click', function () {
    input += ".";
    io.innerText = input;

});
divide.addEventListener('click', function () {
    input += "/";
    io.innerText = input;

});
multiply.addEventListener('click', function () {
    input += "*";
    io.innerText = input;

});
add.addEventListener('click', function () {
    input += "+";
    io.innerText = input;

});
subtract.addEventListener('click', function () {
    input += "-";
    io.innerText = input;

});

equal.addEventListener('click', function () {
    var out = eval(input);
    io.innerText = out;
    input = out;


});

document.addEventListener('keypress', function (Event) {

    console.log(Event.keyCode)

    switch (Event.keyCode) {
        case 49:
            input += "1";
            io.innerText = input;
            break;
        case 50:
            input += "2";
            io.innerText = input;
            break;
        case 51:
            input += "3";
            io.innerText = input;
            break;
        case 52:
            input += "4";
            io.innerText = input;
            break;
        case 53:
            input += "5";
            io.innerText = input;
            break;
        case 54:
            input += "6";
            io.innerText = input;
            break;
        case 55:
            input += "7";
            io.innerText = input;
            break;
        case 56:
            input += "8";
            io.innerText = input;
            break;
        case 57:
            input += "9";
            io.innerText = input;
            break;
        case 43:
            input += "+";
            io.innerText = input;
            break;
        case 45:
            input += "-";
            io.innerText = input;
            break;
        case 42:
            input += "*";
            io.innerText = input;
            break;
        case 47:
            input += "/";
            io.innerText = input;
            break;
        case 48:
            input += "0";
            io.innerText = input;
            break;
        case 46:
            input += ".";
            io.innerText = input;
            break;
        case 13:
            var out = eval(input);
            io.innerText = out;
            input = out;



        default:
            break;
    }
});

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}






