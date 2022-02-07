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
};
// run fight function to start game
fight();


// Setting up key word var with name "fight" and equal or execute code of Function

// var fight=function() {
//     window.alert("Welcome to Robot Gladiators, " + pName + "!");
// };

// fight();

// //We need to subtract pAttack with eHealth to update eHealth. Log result in console. Subtract value of eAttack to pHealth and update pHealth. Log result in console.
// // Player attack Enemy
// eHealth = eHealth - pAttack;

// console.log(pName+" attacked "+eName+". "+eName+" now has "+eHealth+" health remaining.");

// // Enemy attack player

// pHealth=pHealth-eAttack;

// console.log(eName+" attacked "+pName+". "+pName+" now has "+pHealth+" health remaining.");

// // 3 equal sign (===)is use to heck if two values are directly equal to each other.

// //Check to see if player health is still greater than 0
// if(pHealth>0) {
//     console.log("Your player is still alive!");
// }
// if(pHealth===0) {
//     console.log("This will not run.");
// }
// else{
//     console.log("This will run instead.");
// };

// //Check to see if enemy health is still greate or equal to 0 and alert window
// if(eHealth<=0) {
//     window.alert(eName+" has died!");
// }
// else{
//     window.alert(eName+" has "+eHealth+" remaining!");
// }

// //Check to see if player robot is dead or alive

// if(pHealth<=0) {
//     window.alert(pName + " has died!");
// }
// else {
//     window.alert(pName+" still has "+pHealth+" health remaining.");
// }

