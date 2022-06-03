function test() {
    console.log("1")
}

function test() {
    console.log(2)
}
test()

function showMessage(from, text = "текст не добавлен") {
    console.log(from + ": " + text);
}

showMessage("Paul"); // Paul: текст не добавлен

function anotherFunction() {
    return 'Ceci est un message'
}

function showMessage2(from, text = anotherFunction()) {
    console.log(from + ": " + text);
}

showMessage2("Info")                //Info: Ceci est un message
showMessage2("Info", "bla bla bla") //Info: bla bla bla

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
/////

function min(a, b) {
    console.log(a < b ? a : b)
}
min(2, 5)   //2
min(-2, -5) //-5
min(2, -5)  //-5
min(1, 1)   //1

