// Score and manual upgrades
let linesOfCode = 0;
let clickPower = 1;
let upgradeCost = 50;
let setupCost = 250;

// Automatic upgrades
let interns = 0;
let internCost = 100;
let developers = 0;
let developerCost = 100;

function writeCode() {
    linesOfCode += clickPower;
    updateScreen();
}

function buyKeyboard() {
    if (linesOfCode >= upgradeCost) {
        linesOfCode -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        updateScreen();
    }
}

function buySetup() {
    if (linesOfCode >= setupCost) {
        linesOfCode -= setupCost;
        clickPower += 5;
        setupCost = Math.ceil(setupCost * 1.5);
        updateScreen();
    }
}

function buyIntern() {
    if (linesOfCode >= internCost) {
        linesOfCode -= internCost;
        interns += 1;
        internCost = Math.ceil(internCost * 1.5);
        updateScreen();
    }
}

function buyDeveloper() {
    if (linesOfCode >= developerCost) {
        linesOfCode -= developerCost;
        developers += 1;
        developerCost = Math.ceil(developerCost * 1.5);
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById("score-display").innerText =
        linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;
    document.getElementById("setup-cost-display").innerText = setupCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;

    document.getElementById("developer-display").innerText = developers;
    document.getElementById("developer-cost-display").innerText =
        developerCost;
}

// Each intern earns 1 line/second.
// Each senior developer earns 10 lines/second.
setInterval(function () {
    linesOfCode += interns + developers * 10;
    updateScreen();
}, 100);

updateScreen();