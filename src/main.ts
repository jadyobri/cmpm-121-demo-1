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

document.body.appendChild(counterDiv);
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
  // clicked = true;
  //increaseAvailability();
});
//https://i.sstatic.net/8Dy2H.png
//let testTimer: number
// Create a new button for purchasing the upgrade
const upgradeButton = document.createElement("button");

// Set the upgrade button text
upgradeButton.textContent = "Buy Upgrade (+1 growth rate) - Cost: 10 cookies";

// Initially disable the upgrade button
upgradeButton.disabled = true;

// Add an event listener to handle upgrading when clicked
upgradeButton.addEventListener("click", () => {
    if (counter >= 10) {
        counter -= 10;  // Deduct 10 cookies
        increaseSpeed++;    // Increase the growth rate by 1 unit per second
        updateCounter();
        checkUpgradeAvailability();
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

function checkUpgradeAvailability() {
  if (counter >= 10) {
      upgradeButton.disabled = false;
  } else {
      upgradeButton.disabled = true;
  }
}
// Append the upgrade button to the body
document.body.appendChild(upgradeButton);
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
function animate(timestamp: number) {
  if (lastTime) {
    const deltaTime = timestamp - lastTime; //Calculate time difference between frames
    const increment = (increaseSpeed*deltaTime) / 1000; //Convert deltaTime to seconds and calculate fractional increment
    counter += increment; //Increase the counter based on the time passed
    updateCounter(); //Update the counter display
    checkUpgradeAvailability();
  }
  lastTime = timestamp; //Update the lastTime for the next frame

  //Request the next frame
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
