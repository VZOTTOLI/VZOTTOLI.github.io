let accountBalance = 100;
const moneyWithdraw = 10;

function moneyWithdraw() {
    accountBalance = accountBalance - moneyWithdraw;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText = accountBalance;

    if(accountBalance > 0)
    {
         moneyText.innerText = accountBalance;
        statusText.innerText = "Money Withdrew";
    }
    else
    {
        moneyText.innerText = 0;
        statusText.innerText = "Low Balance";
        statusText.style.color = "#f9331d"; 
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#f5aa08"; 

        document.querySelector("button").disabled = true;
        document.querySelector("button").innertext = "Dead";     
    }
}