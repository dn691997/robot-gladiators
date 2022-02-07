// Setting up the stats for the player using var element

var pName=window.prompt("Enter your robot's name");
var pHealth=100;
var pAttack=10;
var pMoney=10;

//Setting up the stats for computer enemy using var element
var eName="Roborto";
var eHealth=50;
var eAttack=12;

// You can also log multiple values at once like this
console.log(pName,pHealth,pAttack,pMoney);
console.log(eName,eHealth,eAttack);


//Alert message to welcome player
var fight=function(){window.alert("Welcome to Robot Gladiators, " + pName + "!");


//Alert player of current stat of player and enemy

window.alert(pName+" currently have "+pHealth+" health, " +pAttack+" attack, "+pMoney+" money"+". "+eName+" currently have "+eHealth+" health, "+eAttack+" attack.");

//Prompt will pop up asking player if the want to fight or skip. pfight=promptFight (just a name, it can be name anything)

var pFight=window.prompt("Would you like to fight or skip this battle?");

//If they pick fight. Compute result for the fight. Show result using prompt after fight to show Player remaining health and Enemy health are attacking.

if(pFight==="fight" || pFight==="FIGHT" || pFight==="Fight"){
    eHealth=eHealth-pAttack, pHealth=pHealth-eAttack;
    window.alert(pName + " attacked " + eName + ". " + eName + " now has " + eHealth + " health remaining. "+pName + " now has " + pHealth + " health remaining.");
}
//Check to see if player and/or enemy health is less than or equal to 0. Then alert the player if either party dies or survive.
if(pHealth<=0){
    wwindow.alert(pName + " has died!");
}
if(eHealth<=0){
    wwindow.alert(eName + " has died!");
}

//If player choose/input "skip" OR "SKIP" OR "Skip" then:
else if(pFight==="skip" || pFight==="SKIP" || pFight==="Skip") {
    //confirm player decision
    var confirmSkip=window.confirm("Are you sure you'd like to skip?");
    //if yes (true), then leave fight
    if (confirmSkip){
    window.alert(pName + " has decided to skip this fight. Goodbye!");
    //subtract money for skipping
    pMoney=pMoney-2;
    window.alert(pName+" lost 2 Money as penalty for skipping. "+ pName+" remaining gold is "+pMoney+".");
}
    else {
        fight();
    }
//if the player input an invalid answer that is not fight or skip into prompt. Then bring back the prompt "would you like to fight or skip battle" again
}   else {
    window.alert("You need to choose a valid option. Try again!");
    }
//note that the } tag below is to close out the var fight=function (){ up top.
};

// run fight function to start game
fight();
