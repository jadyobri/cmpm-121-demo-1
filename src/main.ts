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


//Used generative AI for start
// Initial game variables
const button = document.createElement("button");
let counter = 0;
let increaseSpeed = 0;
const INITIAL_COST_SMALL_SMILE = 10;
const INITIAL_COST_VERY_HAPPY = 100;
const INITIAL_COST_LAUGH = 1000;
const INITIAL_COST_GOOFY = 2000;
const INITIAL_COST_COOL = 10000;
const COST_MULTIPLIER = 1.15;
const INITIAL_RATES = {
  small: 0.1,
  medium: 2,
  large: 50,
  xlarge: 2,
  xxlarge: 4,
};

// Item interface
interface Item {
  name: string;
  cost: number;
  rate: number;
  amount: number;
  description: string;
  amountDisplay?: HTMLDivElement;
  buttonElement?: HTMLButtonElement;
}


const availableItems: Item[] = [
  { name: "😄", cost: INITIAL_COST_SMALL_SMILE, rate: INITIAL_RATES.small, amount: 0, description: "Happy" },
  { name: "😁", cost: INITIAL_COST_VERY_HAPPY, rate: INITIAL_RATES.medium, amount: 0, description: "Very Happy" },
  {
    name: "😂",
    cost: INITIAL_COST_LAUGH,
    rate: INITIAL_RATES.large,
    amount: 0,
    description: "Laugh my ... off",
  },
  { name: "😝", cost: INITIAL_COST_GOOFY, rate: INITIAL_RATES.xlarge, amount: 0, description: "Goofy" },
  { name: "😎", cost: INITIAL_COST_COOL, rate: INITIAL_RATES.xxlarge, amount: 0, description: "Too Cool" },
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
upgradefirst.textContent = `0 😄`;
upgradefirst.style.position = "absolute";
upgradefirst.style.top = "3%";
upgradefirst.style.left = "93%";
upgradefirst.style.transform = "translate(-50%, -50%)";
upgradefirst.style.fontSize = "20px";
upgradefirst.style.margin = "20px";
upgradefirst.style.textAlign = "center";

//makes 😁 button for upgrade
const upgradesecond = document.createElement("div");
upgradesecond.textContent = `0 😁`;
upgradesecond.style.position = "absolute";
upgradesecond.style.top = "7%";
upgradesecond.style.left = "93%";
upgradesecond.style.transform = "translate(-50%, -50%)";
upgradesecond.style.fontSize = "20px";
upgradesecond.style.margin = "20px";
upgradesecond.style.textAlign = "center";

const upgradethird = document.createElement("div");
upgradethird.textContent = `0 😂`;
upgradethird.style.position = "absolute";
upgradethird.style.top = "11%";
upgradethird.style.left = "93%";
upgradethird.style.transform = "translate(-50%, -50%)";
upgradethird.style.fontSize = "20px";
upgradethird.style.margin = "20px";
upgradethird.style.textAlign = "center";

const upgradefourth = document.createElement("div");
upgradefourth.textContent = `0 😝`;
upgradefourth.style.position = "absolute";
upgradefourth.style.top = "15%";
upgradefourth.style.left = "93%";
upgradefourth.style.transform = "translate(-50%, -50%)";
upgradefourth.style.fontSize = "20px";
upgradefourth.style.margin = "20px";
upgradefourth.style.textAlign = "center";

const upgradefifth = document.createElement("div");
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
button.style.backgroundImage = "url('https://emojicdn.elk.sh/%F0%9F%98%83')";
button.style.backgroundSize = "cover";
button.style.position = "absolute";
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
  counter++;
  updateCounter();
  updateUpgradeButtons();
});

//Buying upgrades0
function buyUpgrade(item: Item, button: HTMLButtonElement) {
  if (counter >= item.cost) {
    // Deduct cost and increase speed
    counter -= item.cost;
    updateIncreaseSpeed(item); // Modular rate update

    // Update item amount and cost
    item.amount++;
    item.cost = calculateNewCost(item.cost);
    
    // Update UI displays
    if (item.amountDisplay) item.amountDisplay.textContent = `${item.amount} ${item.name}`;
    updateCounter();
    updateUpgradeButtons();
    updateButtonLabel(button, item);
  }
}

//updates cost of button on label
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

//needs current cost times costmult.
function calculateNewCost(currentCost: number): number {
  return currentCost * COST_MULTIPLIER;
}

//checks for which for item rate.
function updateIncreaseSpeed(item: Item) {
      if (item.name === "😝" || item.name === "😎") {
        increaseSpeed *= item.rate;
      } else {
        increaseSpeed += item.rate;
      }
      speedCount.textContent = `${increaseSpeed.toFixed(1)} 😀/second`;
}

//creates each upgrade button itself
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
    upgradeButton.disabled = true;



    // Add event listener for the upgrade button
    upgradeButton.addEventListener("click", () => buyUpgrade(item, upgradeButton));

    // Append the upgrade button to the body
    document.body.appendChild(upgradeButton);

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
const itemButtonMap = new Map<string, HTMLButtonElement>();

//https://i.sstatic.net/8Dy2H.png



//Changes positioning
button.style.position = "absolute";
button.style.top = "60%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "10px 20px"; // Optional: make the button look better
button.style.fontSize = "16px"; // Optional: adjust font size

//Adds the button to the body (or any other element)
document.body.appendChild(button);


// Initialize the game by creating upgrade buttons and setting up animations
function initializeGame() {
  createUpgradeButtons();
  requestAnimationFrame(animate);
}


//Use of AI for assistance.
let lastTime = 0;

// Animation loop to increment the counter over time based on increase speed
function animate(timestamp: number) {
  if (lastTime) {
    const deltaTime = timestamp - lastTime; //Calculate time difference between frames
    const increment = (increaseSpeed * deltaTime) / 1000; //Convert deltaTime to seconds and calculate fractional increment
    counter += increment; //Increase the counter based on the time passed
    updateCounter(); //Update the counter display
    updateUpgradeButtons();
  }
  lastTime = timestamp; //Update the lastTime for the next frame

  //Request the next frame
  requestAnimationFrame(animate);
}
initializeGame();
