import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Clicking Combo";
document.title = gameName;


const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Used generative AI for start
const button = document.createElement("button");
let counter = 0;
let increaseSpeed = 0;



const counterDiv = document.createElement("div");
counterDiv.textContent = `${counter} smiles`;
counterDiv.style.position = "absolute";
counterDiv.style.top = "90%";
counterDiv.style.left = "47%";
counterDiv.style.transform = "translate(-50%, -50%)";
counterDiv.style.fontSize = "20px";
counterDiv.style.margin = "20px";
counterDiv.style.textAlign = "center";

const speedCount = document.createElement("div");
speedCount.textContent = `${increaseSpeed} smilerate`;
speedCount.style.position = "absolute";
speedCount.style.top = "30%";
speedCount.style.left = "47%";
speedCount.style.transform = "translate(-50%, -50%)";
speedCount.style.fontSize = "20px";
speedCount.style.margin = "20px";
speedCount.style.textAlign = "center";

const upgradefirst = document.createElement("div");
let upgrade1 = 0;
upgradefirst.textContent = `${upgrade1} 😄`;
upgradefirst.style.position = "absolute";
upgradefirst.style.top = "68%";
upgradefirst.style.left = "63%";
upgradefirst.style.transform = "translate(-50%, -50%)";
upgradefirst.style.fontSize = "20px";
upgradefirst.style.margin = "20px";
upgradefirst.style.textAlign = "center";
//😁
const upgradesecond = document.createElement("div");
let upgrade2 = 0;
upgradesecond.textContent = `${upgrade2} 😁`;
upgradesecond.style.position = "absolute";
upgradesecond.style.top = "75%";
upgradesecond.style.left = "63%";
upgradesecond.style.transform = "translate(-50%, -50%)";
upgradesecond.style.fontSize = "20px";
upgradesecond.style.margin = "20px";
upgradesecond.style.textAlign = "center";

const upgradethird = document.createElement("div");
let upgrade3 = 0;
upgradethird.textContent = `${upgrade3} 😂`;
upgradethird.style.position = "absolute";
upgradethird.style.top = "85%";
upgradethird.style.left = "63%";
upgradethird.style.transform = "translate(-50%, -50%)";
upgradethird.style.fontSize = "20px";
upgradethird.style.margin = "20px";
upgradethird.style.textAlign = "center";

document.body.appendChild(counterDiv);
document.body.appendChild(upgradefirst);
document.body.appendChild(upgradesecond);
document.body.appendChild(upgradethird);
document.body.appendChild(speedCount);
function updateCounter() {
  counterDiv.textContent = `${counter} smiles`;
}
//let clicked = false;

button.textContent = "😀";
button.addEventListener("click", () => {
  //alert("Button clicked");
  counter++;
  updateCounter();
  counterDiv.textContent = `${counter} smiles`;
  checkUpgradeAvailability();
  checkUpgradeAvailability2();
  checkUpgradeAvailability3();
  // clicked = true;
  //increaseAvailability();
});
//https://i.sstatic.net/8Dy2H.png
//let testTimer: number
// Create a new button for purchasing the upgrade
const upgradeButton = document.createElement("button");
//Notes, make 3 upgrade buttons, each one increases amount by certain increment.
//Show a current growth rate
//Count of how much of each type have been purchased.
//Names of upgrades: standard, silver, gold.
// Set the upgrade button text
upgradeButton.textContent = "Buy Upgrade (+0.1 growth rate) - Cost: 10 smiles";
// Initially disable the upgrade button
upgradeButton.disabled = true;
// Add an event listener to handle upgrading when clicked
upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10; // Deduct 10 cookies
    increaseSpeed += .1; // Increase the growth rate by 1 unit per second
    upgrade1 +=1;
    
    upgradefirst.textContent = `${upgrade1} 😄`;
    updateCounter();
    speedCount.textContent = `${increaseSpeed} smilerate`;
    checkUpgradeAvailability();
    checkUpgradeAvailability2();
    checkUpgradeAvailability3();
  }
});
// Apply CSS to the upgrade button
upgradeButton.style.display = "block";
upgradeButton.style.margin = "10px auto";
upgradeButton.style.padding = "10px 20px";
upgradeButton.style.fontSize = "16px";
upgradeButton.style.position = "absolute";
upgradeButton.style.top = "70%";
upgradeButton.style.left = "50%";
upgradeButton.style.transform = "translate(-50%, -50%)";

const upgradeButton1 = document.createElement("button");
//Notes, make 3 upgrade buttons, each one increases amount by certain increment.
//Show a current growth rate
//Count of how much of each type have been purchased.
//Names of upgrades: standard, silver, gold.
// Set the upgrade button text
upgradeButton1.textContent = "Buy Upgrade (+2 growth rate) - Cost: 100 smiles";
// Initially disable the upgrade button
upgradeButton1.disabled = true;
// Add an event listener to handle upgrading when clicked
upgradeButton1.addEventListener("click", () => {
  if (counter >= 100) {
    counter -= 100; // Deduct 10 cookies
    increaseSpeed += 2; // Increase the growth rate by 1 unit per second
    upgrade2+=1;
    upgradesecond.textContent = `${upgrade2} 😁`;
    speedCount.textContent = `${increaseSpeed} smilerate`;
    updateCounter();
    speedCount.textContent = `${increaseSpeed} smilerate`;
    checkUpgradeAvailability();
    checkUpgradeAvailability2();
    checkUpgradeAvailability3();
  }
});
// Apply CSS to the upgrade button
upgradeButton1.style.display = "block";
upgradeButton1.style.margin = "10px auto";
upgradeButton1.style.padding = "10px 20px";
upgradeButton1.style.fontSize = "16px";
upgradeButton1.style.position = "absolute";
upgradeButton1.style.top = "78%";
upgradeButton1.style.left = "50%";
upgradeButton1.style.transform = "translate(-50%, -50%)";


const upgradeButton2 = document.createElement("button");
//Notes, make 3 upgrade buttons, each one increases amount by certain increment.
//Show a current growth rate
//Count of how much of each type have been purchased.
//Names of upgrades: standard, silver, gold.
// Set the upgrade button text
upgradeButton2.textContent = "Buy Upgrade (+50 growth rate) - Cost: 1000 smiles";
// Initially disable the upgrade button
upgradeButton2.disabled = true;
// Add an event listener to handle upgrading when clicked
upgradeButton2.addEventListener("click", () => {
  if (counter >= 100) {
    counter -= 100; // Deduct 10 cookies
    increaseSpeed += 50; // Increase the growth rate by 1 unit per second
    updateCounter();
    upgrade3++;
    upgradethird.textContent = `${upgrade3} 😂`;
    speedCount.textContent = `${increaseSpeed} smilerate`;
    checkUpgradeAvailability();
    checkUpgradeAvailability2();
    checkUpgradeAvailability3();
  }
});
// Apply CSS to the upgrade button
upgradeButton2.style.display = "block";
upgradeButton2.style.margin = "10px auto";
upgradeButton2.style.padding = "10px 20px";
upgradeButton2.style.fontSize = "16px";
upgradeButton2.style.position = "absolute";
upgradeButton2.style.top = "85%";
upgradeButton2.style.left = "50%";
upgradeButton2.style.transform = "translate(-50%, -50%)";



function checkUpgradeAvailability() {
  if (counter >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
}
function checkUpgradeAvailability2() {
  if (counter >= 100) {
    upgradeButton1.disabled = false;
  } else {
    upgradeButton1.disabled = true;
  }
}

function checkUpgradeAvailability3() {
  if (counter >= 1000) {
    upgradeButton2.disabled = false;
  } else {
    upgradeButton2.disabled = true;
  }
}

//function toText(){

//}

// Append the upgrade button to the body
document.body.appendChild(upgradeButton);
document.body.appendChild(upgradeButton1);
document.body.appendChild(upgradeButton2);
// setInterval(() => {
//   if (clicked == false) {
//     counter++;
//     updateCounter();
//     //counterDiv.textContent = `${counter.toFixed(2)} smiles`;
//   } else {
//     clicked = false;
//   }
// }, 1000);

//Changes positioning
button.style.position = "absolute";
button.style.top = "60%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "10px 20px"; // Optional: make the button look better
button.style.fontSize = "16px"; // Optional: adjust font size

//Adds the button to the body (or any other element)
document.body.appendChild(button);

//Use of AI for assistance.
let lastTime = 0;
//let upandup = 0;
function animate(timestamp: number) {
  if (lastTime) {
    const deltaTime = timestamp - lastTime; //Calculate time difference between frames
    const increment = (increaseSpeed * deltaTime) / 1000; //Convert deltaTime to seconds and calculate fractional increment
    counter += increment; //Increase the counter based on the time passed
    updateCounter(); //Update the counter display
    checkUpgradeAvailability();
    checkUpgradeAvailability2();
    checkUpgradeAvailability3();
  }
  lastTime = timestamp; //Update the lastTime for the next frame

  //Request the next frame
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
