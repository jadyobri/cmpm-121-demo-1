import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Clicking Combo";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
header.style.position = "absolute";
header.style.top = "10%";
header.style.left = "50%";
header.style.transform = "translate(-50%, -50%)";
header.style.textAlign = "center";
app.append(header);

//let increase1 = 10;
//let increase2 = 100;
//let increase3 = 1000;

//Used generative AI for start
const button = document.createElement("button");
let counter = 0;
let increaseSpeed = 0;
//let distance = 0;
interface Item {
  name: string;
  cost: number;
  rate: number;
  amount: number;
  description: string;
}

const availableItems: Item[] = [
  { name: "😄", cost: 10, rate: 0.1, amount: 0, description: "Happy"},
  { name: "😁", cost: 100, rate: 2, amount: 0, description: "Very Happy"},
  { name: "😂", cost: 1000, rate: 50, amount: 0, description: "Laugh my ... off"},
  { name: "😝", cost: 2000, rate: 2, amount: 0, description: "Goofy" },
  { name: "😎", cost: 10000, rate: 4, amount: 0, description: "Too Cool" },
];

const counterDiv = document.createElement("div");
counterDiv.textContent = `${counter} 😀`;
counterDiv.style.position = "absolute";
counterDiv.style.top = "90%";
counterDiv.style.left = "50%";
counterDiv.style.transform = "translate(-50%, -50%)";
counterDiv.style.fontSize = "20px";
counterDiv.style.margin = "20px";
counterDiv.style.textAlign = "center";

const speedCount = document.createElement("div");
speedCount.textContent = `${increaseSpeed} 😀/second`;
speedCount.style.position = "absolute";
speedCount.style.top = "30%";
speedCount.style.left = "50%";
speedCount.style.transform = "translate(-50%, -50%)";
speedCount.style.fontSize = "20px";
speedCount.style.margin = "20px";
speedCount.style.textAlign = "center";

const upgradefirst = document.createElement("div");
//let upgrade1 = 0;
upgradefirst.textContent = `0 😄`;
upgradefirst.style.position = "absolute";
upgradefirst.style.top = "3%";
upgradefirst.style.left = "93%";
upgradefirst.style.transform = "translate(-50%, -50%)";
upgradefirst.style.fontSize = "20px";
upgradefirst.style.margin = "20px";
upgradefirst.style.textAlign = "center";
// //😁
const upgradesecond = document.createElement("div");
//let upgrade2 = 0;
upgradesecond.textContent = `0 😁`;
upgradesecond.style.position = "absolute";
upgradesecond.style.top = "7%";
upgradesecond.style.left = "93%";
upgradesecond.style.transform = "translate(-50%, -50%)";
upgradesecond.style.fontSize = "20px";
upgradesecond.style.margin = "20px";
upgradesecond.style.textAlign = "center";

const upgradethird = document.createElement("div");
//let upgrade3 = 0;
upgradethird.textContent = `0 😂`;
upgradethird.style.position = "absolute";
upgradethird.style.top = "11%";
upgradethird.style.left = "93%";
upgradethird.style.transform = "translate(-50%, -50%)";
upgradethird.style.fontSize = "20px";
upgradethird.style.margin = "20px";
upgradethird.style.textAlign = "center";

const upgradefourth = document.createElement("div");
//let upgrade3 = 0;
upgradefourth.textContent = `0 😝`;
upgradefourth.style.position = "absolute";
upgradefourth.style.top = "15%";
upgradefourth.style.left = "93%";
upgradefourth.style.transform = "translate(-50%, -50%)";
upgradefourth.style.fontSize = "20px";
upgradefourth.style.margin = "20px";
upgradefourth.style.textAlign = "center";

const upgradefifth = document.createElement("div");
//let upgrade3 = 0;
upgradefifth.textContent = `0 😎`;
upgradefifth.style.position = "absolute";
upgradefifth.style.top = "19%";
upgradefifth.style.left = "93%";
upgradefifth.style.transform = "translate(-50%, -50%)";
upgradefifth.style.fontSize = "20px";
upgradefifth.style.margin = "20px";
upgradefifth.style.textAlign = "center";

document.body.appendChild(counterDiv);
document.body.appendChild(upgradefirst);
document.body.appendChild(upgradesecond);
document.body.appendChild(upgradethird);
document.body.appendChild(upgradefourth);
document.body.appendChild(upgradefifth);
document.body.appendChild(speedCount);
function updateCounter() {
  counterDiv.textContent = `${counter} 😀`;
}
//let clicked = false;

//button.textContent = "😀";
button.style.backgroundImage = "url('https://emojicdn.elk.sh/%F0%9F%98%83')";
button.style.backgroundSize = "cover";
button.style.position = "absolute";
// button.style.top = "15%";
// button.style.left = "93%";
// button.style.transform = "translate(-50%, -50%)";
button.style.backgroundPosition = "center";
button.style.width = "75px";
button.style.height = "75px";
button.style.borderRadius = "50%";
button.style.border = "5px solid #FFD700"; // Darker brown border
button.style.backgroundColor = "#f4a460"; // Light brown background
button.style.fontSize = "100px"; // Big emoji text
button.style.lineHeight = "150px"; // Align the emoji vertically
button.style.textAlign = "center";
button.style.cursor = "pointer";
button.style.margin = "20px auto";
button.style.display = "block";
button.style.padding = "0";
button.addEventListener("click", () => {
  //alert("Button clicked");
  counter++;
  updateCounter();
  updateUpgradeButtons();
  //counterDiv.textContent = `${counter} 😀`;
  //checkUpgradeAvailability();
  //checkUpgradeAvailability2();
  //checkUpgradeAvailability3();
  // clicked = true;
  //increaseAvailability();
});
function updateButtonLabel(button: HTMLButtonElement, item: Item) {
  if (item.name != "😝" && item.name != "😎") {
    button.textContent = `${item.description}, ${item.name} (+${item.rate} rate) - ${item.cost.toFixed(
      2,
    )} 😀`;
  } else {
    button.textContent = `${item.description}, ${item.name} (${item.rate} x 😀/second) - ${item.cost.toFixed(
      2,
    )} 😀`;
  }
}

function createUpgradeButtons() {
  availableItems.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.style.position = "relative"; // Relative positioning for absolute placement of the counter
    itemContainer.style.textAlign = "center"; // Center the button in the container
    itemContainer.style.marginBottom = "20px"; // Add space between different items
    itemContainer.style.width = "250px"; // Set a fixed width for the container
    itemContainer.style.margin = "0 auto"; // Center the container
    itemContainer.style.border = "1px solid #ddd"; // Add border around the container
    
    
    const upgradeButton = document.createElement("button");
    if (item.name != "😝" && item.name != "😎") {
      upgradeButton.textContent = `${item.description}, ${item.name} (+${item.rate} rate) - ${item.cost} 😀`;
    } else if (item.name == "😝") {
      upgradeButton.textContent = `${item.description}, ${item.name} (2 x 😀/second) - ${item.cost} 😀`;
    } else if (item.name == "😎") {
      upgradeButton.textContent = `${item.description}, ${item.name} (4 x 😀/second) - ${item.cost} 😀`;
    }
    upgradeButton.style.display = "block";
    upgradeButton.style.margin = "10px auto";
    upgradeButton.style.padding = "10px 20px";
    upgradeButton.style.fontSize = "16px";
    //  upgradeButton.style.width = "100%";
    upgradeButton.disabled = true;

    // const amountDiv = document.createElement("div");
    // amountDiv.textContent = `You have bought: 0`;
    // amountDiv.style.textAlign = "center";
    // amountDiv.style.marginBottom = "10px";

    // const upgradeCount = document.createElement("div");
    // upgradeCount.textContent = ''+item.name + ' ' + item.amount;
    // upgradeCount.style.position = "absolute"; // Absolute positioning inside the container
    // upgradeCount.style.top = "5px"; // Align to the top
    // upgradeCount.style.right = "5px"; // Align to the right
    // upgradeCount.style.padding = "5px";
    // upgradeCount.style.transform = "translate(-50%, 50%)";
    // upgradeCount.style.backgroundColor = "#FFF"; // Optional: background for better visibility
    // upgradeCount.style.border = "1px solid #000"; // Optional: border for better visibility
    // upgradeCount.style.fontSize = "12px"; // Small font size for the counter
    //distance+= 1;
    //upgradeCount.style.display = "block";
    //upgradeCount.style.transform = "translate(-50%, %)";
    //upgradeCount.style.margin = "10px auto";
    //upgradeCount.style.top = "40%";
    //upgradeCount.style.textAlign = "center";
    // upgradeCount.style.marginTop = "5px";
    // upgradeCount.style.width = "100%";
    // upgradeCount.style.padding = "10px 20px";
    // upgradeCount.style.fontSize = "16px";

    // Add event listener for the upgrade button
    upgradeButton.addEventListener("click", () => {
      if (counter >= item.cost) {
        counter -= item.cost;
        // if(item.name != "😝" && item.name != "😎"){
        //   item.cost *= 1.15;
        // }
        if (item.name == "😝" || item.name == "😎") {
          increaseSpeed *= item.rate;
          if(item.name == "😝"){
            item.cost *= 10;
          }
          else{
            item.cost *= 100;
          }
        } else {
          increaseSpeed += item.rate;
          item.cost *= 1.15;
        }
        speedCount.textContent = `${increaseSpeed} 😀/second`;
        item.amount++;
        if (item.name == "😄") {
          upgradefirst.textContent = `${item.amount} 😄`;
        } else if (item.name == "😂") {
          upgradethird.textContent = `${item.amount} 😂`;
        } else if (item.name == "😁") {
          upgradesecond.textContent = `${item.amount} 😁`;
        } else if (item.name == "😝") {
          upgradefourth.textContent = `${item.amount} 😝`;
        } else if (item.name == "😎") {
          upgradefifth.textContent = `${item.amount} 😎`;
        }
        //upgradeCount.textContent = ''+item.name + ' ' + item.amount;
        updateCounter();
        updateUpgradeButtons();
        updateButtonLabel(upgradeButton, item);
      }
      //itemContainer.appendChild(upgradeButton);
      //itemContainer.appendChild(upgradeCount);
      // document.body.appendChild(itemContainer);

      // Store reference to the button for later updates
      itemButtonMap.set(item.name, upgradeButton);
    });

    // Append the upgrade button to the body
    document.body.appendChild(upgradeButton);
    //document.body.appendChild(upgradeCount);

    // Store reference to the button for later updates
    itemButtonMap.set(item.name, upgradeButton);
  });
}
function updateUpgradeButtons() {
  availableItems.forEach((item) => {
    const butter = itemButtonMap.get(item.name);
    if (butter) {
      butter.disabled = counter < item.cost;
    }
  });
}
// function updateCounter() {
//   counterDiv.textContent = `${counter.toFixed(2)} smiles`;
// }
const itemButtonMap = new Map<string, HTMLButtonElement>();

//https://i.sstatic.net/8Dy2H.png
//let testTimer: number
// Create a new button for purchasing the upgrade
// const upgradeButton = document.createElement("button");
// //Notes, make 3 upgrade buttons, each one increases amount by certain increment.
// //Show a current growth rate
// //Count of how much of each type have been purchased.
// //Names of upgrades: standard, silver, gold.
// // Set the upgrade button text
// upgradeButton.textContent =
//   "buy 😄 (+0.1 😀 rate) - Cost: " + increase1 + " 😀";
// // Initially disable the upgrade button
// upgradeButton.disabled = true;
// // Add an event listener to handle upgrading when clicked
// upgradeButton.addEventListener("click", () => {
//   if (counter >= increase1) {
//     counter -= increase1; // Deduct 10 cookies
//     increaseSpeed += 0.1; // Increase the growth rate by 1 unit per second
//     upgrade1 += 1;

//     upgradefirst.textContent = `${upgrade1} 😄`;
//     updateCounter();
//     speedCount.textContent = `${increaseSpeed} 😀/second`;
//     //checkUpgradeAvailability();
//     //checkUpgradeAvailability2();
//     //checkUpgradeAvailability3();
//     increase1 *= 1.15;
//     upgradeButton.textContent =
//       "😄 (+0.1 😀 rate) - Cost: " + increase1 + " 😀";
//   }
// });
// Apply CSS to the upgrade button
// upgradeButton.style.display = "block";
// upgradeButton.style.margin = "10px auto";
// upgradeButton.style.padding = "10px 20px";
// upgradeButton.style.fontSize = "16px";
// upgradeButton.style.position = "absolute";
// upgradeButton.style.top = "70%";
// upgradeButton.style.left = "50%";
// upgradeButton.style.transform = "translate(-50%, -50%)";

//const upgradeButton1 = document.createElement("button");
//Notes, make 3 upgrade buttons, each one increases amount by certain increment.
//Show a current growth rate
//Count of how much of each type have been purchased.
//Names of upgrades: standard, silver, gold.
// Set the upgrade button text
//upgradeButton1.textContent =
//"😁 (+2 😀 rate) - Cost: " + increase2 + " 😀";
// Initially disable the upgrade button
// upgradeButton1.disabled = true;
// // Add an event listener to handle upgrading when clicked
// upgradeButton1.addEventListener("click", () => {
//   if (counter >= increase2) {
//     counter -= increase2; // Deduct 10 cookies
//     increaseSpeed += 2; // Increase the growth rate by 1 unit per second
//     upgrade2 += 1;
//     upgradesecond.textContent = `${upgrade2} 😁`;
//     speedCount.textContent = `${increaseSpeed} 😀/second`;
//     updateCounter();
//     speedCount.textContent = `${increaseSpeed} 😀/second`;
//     checkUpgradeAvailability();
//     checkUpgradeAvailability2();
//     checkUpgradeAvailability3();
//     increase2 *= 1.15;
//     upgradeButton1.textContent =
//       "😁 (+2 😀 rate) - Cost: " + increase2 + " 😀";
//   }
// });
// // Apply CSS to the upgrade button
// upgradeButton1.style.display = "block";
// upgradeButton1.style.margin = "10px auto";
// upgradeButton1.style.padding = "10px 20px";
// upgradeButton1.style.fontSize = "16px";
// upgradeButton1.style.position = "absolute";
// upgradeButton1.style.top = "78%";
// upgradeButton1.style.left = "50%";
// upgradeButton1.style.transform = "translate(-50%, -50%)";

// const upgradeButton2 = document.createElement("button");
// //Notes, make 3 upgrade buttons, each one increases amount by certain increment.
// //Show a current growth rate
// //Count of how much of each type have been purchased.
// //Names of upgrades: standard, silver, gold.
// // Set the upgrade button text
// upgradeButton2.textContent =
//   "😂 (+50 😀 rate) - Cost: " + increase3 + " 😀";
// // Initially disable the upgrade button
// upgradeButton2.disabled = true;
// // Add an event listener to handle upgrading when clicked
// upgradeButton2.addEventListener("click", () => {
//   if (counter >= increase3) {
//     counter -= increase3; // Deduct 10 cookies
//     increaseSpeed += 50; // Increase the growth rate by 1 unit per second
//     updateCounter();
//     upgrade3++;
//     upgradethird.textContent = `${upgrade3} 😂`;
//     speedCount.textContent = `${increaseSpeed} 😀/second`;
//     checkUpgradeAvailability();
//     checkUpgradeAvailability2();
//     checkUpgradeAvailability3();
//     increase3 *= 1.15;
//     upgradeButton2.textContent =
//       "😂 (+50 😀 rate) - Cost: " + increase3 + " 😀";
//   }
// });
// // Apply CSS to the upgrade button
// upgradeButton2.style.display = "block";
// upgradeButton2.style.margin = "10px auto";
// upgradeButton2.style.padding = "10px 20px";
// upgradeButton2.style.fontSize = "16px";
// upgradeButton2.style.position = "absolute";
// upgradeButton2.style.top = "85%";
// upgradeButton2.style.left = "50%";
// upgradeButton2.style.transform = "translate(-50%, -50%)";

// function checkUpgradeAvailability() {
//   if (counter >= increase1) {
//     upgradeButton.disabled = false;
//   } else {
//     upgradeButton.disabled = true;
//   }
// }
// function checkUpgradeAvailability2() {
//   if (counter >= increase2) {
//     upgradeButton1.disabled = false;
//   } else {
//     upgradeButton1.disabled = true;
//   }
// }

// function checkUpgradeAvailability3() {
//   if (counter >= increase3) {
//     upgradeButton2.disabled = false;
//   } else {
//     upgradeButton2.disabled = true;
//   }
// }

// //function toText(){

// //}

// // Append the upgrade button to the body
// document.body.appendChild(upgradeButton);
// document.body.appendChild(upgradeButton1);
// document.body.appendChild(upgradeButton2);
// // setInterval(() => {
// //   if (clicked == false) {
// //     counter++;
// //     updateCounter();
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
    updateUpgradeButtons();
    // checkUpgradeAvailability();
    // checkUpgradeAvailability2();
    // checkUpgradeAvailability3();
  }
  lastTime = timestamp; //Update the lastTime for the next frame

  //Request the next frame
  requestAnimationFrame(animate);
}
createUpgradeButtons();
requestAnimationFrame(animate);
