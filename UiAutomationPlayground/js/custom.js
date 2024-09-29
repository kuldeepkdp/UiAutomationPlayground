
function performAnythig() {

    num1 = 30;
    num2 = 20;
    result = num1 + num2;

    document.getElementById("root").innerHTML = `sum of ${num1} and ${num2} is ${result}`
}


function alertFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("alert").innerHTML = txt;
}


function promptFunction() {
    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prompt").innerHTML = text;
  }