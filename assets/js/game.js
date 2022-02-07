// Setting up the stats for the player using var element

var pName=window.prompt("What is your robot's name");
var pHealth=100;
var pAttack=10;
var pMoney=10;

// You can also log multiple values at once like this
console.log(pName,pHealth,pAttack,pMoney);


//Setting up the stats for computer enemy using var element
var eName="Roborto";
var eHealth=50;
var eAttack=12;

// You can also log multiple values at once like this
console.log(eName,eHealth,eAttack)

// Setting up key word var with name "fight" and equal or execute code of Function

var fight=function() {
    window.alert("Welcome to Robot Gladiators, " + pName + "!");
};

fight();

//We need to subtract pAttack with eHealth to update eHealth. Log result in console. Subtract value of eAttack to pHealth and update pHealth. Log result in console.
// Player attack Enemy
eHealth = eHealth - pAttack;

console.log(pName+" attacked "+eName+". "+eName+" now has "+eHealth+" health remaining.");

// Enemy attack player

pHealth=pHealth-eAttack;

console.log(eName+" attacked "+pName+". "+pName+" now has "+pHealth+" health remaining.");

// 3 equal sign (===)is use to heck if two values are directly equal to each other.

//Check to see if player health is still greater than 0
if(pHealth>0) {
    console.log("Your player is still alive!");
}
if(pHealth===0) {
    console.log("This will not run.");
}
else{
    console.log("This will run instead.");
};

//Check to see if enemy health is still greate or equal to 0 and alert window
if(eHealth<=0) {
    window.alert(eName+" has died!");
}
else{
    window.alert(eName+" has "+eHealth+" remaining!");
}

//Check to see if player robot is dead or alive

if(pHealth<=0) {
    window.alert(pName + " has died!");
}
else {
    window.alert(pName+" still has "+pHealth+" health remaining.");
}

