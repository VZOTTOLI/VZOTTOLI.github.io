let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentlevel = currentlevel+1;
    document.getElementById("level").innerHTML = currentLevel;
}