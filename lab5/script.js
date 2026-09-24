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
        statusText.style.color = "#000000"; 
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#d64330"; 

        document.querySelector("button").disabled = true;
        document.querySelector("button").innertext = "Low";     
    }
}

let accountBalance = 0;
const moneydeposit = 40;

function depositMoney() {
accountBalance = accountBalance + moneydeposit;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = accountBalance;

    if(accountBalance = 0)
    {
         moneyText.innerText = accountBalance;
        statusText.innerText = "Money Deposit";
    }
    else
    {
        moneyText.innerText = 800;
        statusText.innerText = "Max Deposit";
        statusText.style.color = "#000000"; 
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#306ad6"; 

        document.querySelector("button").disabled = true;
        document.querySelector("button").innertext = "Max";     
    }

}
   
   
   
   
   
