//Creating variables for our code
let linesOfCode = 0;

let clickPower = 1;
let upgrradeCost = 50;

let interns = 0;
let internCost = 100; 

function writeCode()
{
    linesOfCode = linesOfCode + clickPower;
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";
}