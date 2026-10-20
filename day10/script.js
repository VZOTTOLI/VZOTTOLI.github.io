let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentlevel = currentlevel + 1;
    document.getElementById("level").innerHTML = currentLevel;
}

function savelevel()
{
    localStorage.setItem("savedLevel", currentLevel);
    alert("Level data saved!");
}

function loadlevel()
{
    let retrievedData = localStorage.getItem("savedLevel");

    if(retrievedData !== null)
    {
        currentLevel = retrievedData;
        document.getElementById("level").innerText = currentLevel;
    }
    else
    {
        alert("No save data found...");
    }
}