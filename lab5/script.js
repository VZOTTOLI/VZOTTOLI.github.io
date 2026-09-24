let accountBalance = 100;
const moneyWithdraw = 10;

function withdrawMoney() {
    accountBalance = accountBalance - moneyWithdraw;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = accountBalance;

    if(accountBalance > 0)
    {
         moneyText.innerText = accountBalance;
        statusText.innerText = "Money Withdrew";
    }
    else
    {
        moneyText.innerText = 0;
        statusText.innerText = "Low Balance";
        statusText.style.color = "#ffc116"; 
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#08f528"; 

        document.querySelector("button").disabled = true;
        document.querySelector("button").innertext = "Dead";     
    }
}