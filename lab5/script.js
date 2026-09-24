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

let accountBalance2 = 100;
const moneydeposit2 = 40;

function depositMoney() {
accountBalance2 = accountBalance2 + moneydeposit2;

    const moneyText = document.getElementById("money-display2");
    const statusText = document.getElementById("status-message2");

    moneyText.innerText = accountBalance2;

    if(accountBalance2 > 0)
    {
        moneyText.innerText = accountBalance2;
        statusText.innerText = "Money Deposit";
    }
    else
    {
        moneyText.innerText = 800;
        statusText.innerText = "Max Deposit";
        statusText.style.color = "#000000"; 
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#d64330"; 

        document.querySelector("button").disabled = true;
        document.querySelector("button").innertext = "Max";     
    }

}
   
   
   
   
   
