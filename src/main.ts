import "./style.css";
//found on https://icons8.com/icons/set/cursor--yellow
import customCursor from "./cursors/CursorHand.png";


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
  {
    name: "😄",
    cost: INITIAL_COST_SMALL_SMILE,
    rate: INITIAL_RATES.small,
    amount: 0,
    description: "Happy",
  },
  {
    name: "😁",
    cost: INITIAL_COST_VERY_HAPPY,
    rate: INITIAL_RATES.medium,
    amount: 0,
    description: "Very Happy",
  },
  {
    name: "😂",
    cost: INITIAL_COST_LAUGH,
    rate: INITIAL_RATES.large,
    amount: 0,
    description: "Laugh my ... off",
  },
  {
    name: "😝",
    cost: INITIAL_COST_GOOFY,
    rate: INITIAL_RATES.xlarge,
    amount: 0,
    description: "Goofy",
  },
  {
    name: "😎",
    cost: INITIAL_COST_COOL,
    rate: INITIAL_RATES.xxlarge,
    amount: 0,
    description: "Too Cool",
  },
];
// Create a container for the smile counter and smiles per second display
 const smileContainer = document.createElement("div");
 smileContainer.style.display = "flex !important";
 console.log("Display property (smileContainer):", smileContainer.style.display);
 smileContainer.style.flexDirection = "column";
 smileContainer.style.alignItems = "center";
 smileContainer.style.justifyContent = "center";
 smileContainer.style.width = "300px";
 smileContainer.style.border = "2px solid #ddd";
 smileContainer.style.padding = "10px";
 smileContainer.style.margin = "20px auto";
 smileContainer.style.backgroundColor = "#f9f9f9";
 smileContainer.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.2)"; // Optional: add subtle shadow for depth
 smileContainer.style.top = "70%";
 smileContainer.style.left = "70%";
 smileContainer.style.transform = "translate(140%, 280%)";//used for positioning correctly

//Makes text for smiles count
const counterDiv = document.createElement("div");
counterDiv.textContent = `${counter} 😀`;
counterDiv.style.fontSize = "20px";
counterDiv.style.marginBottom = "10px";
counterDiv.style.textAlign = "center";
counterDiv.style.display = "static";
smileContainer.appendChild(counterDiv);//adds to container

//Makes text for smiles per second
const speedCount = document.createElement("div");
speedCount.textContent = `${increaseSpeed.toFixed(1)} 😀/second`;
speedCount.style.fontSize = "18px";
speedCount.style.textAlign = "center";
speedCount.style.display = "static";


smileContainer.appendChild(speedCount);//adds to container


app.appendChild(smileContainer);


function updateCounter() {
  counterDiv.textContent = `${counter.toFixed(2)} 😀`;
}
button.style.backgroundImage = "url('https://emojicdn.elk.sh/%F0%9F%98%83')";
button.style.backgroundSize = "cover";
button.style.position = "absolute";
button.style.backgroundPosition = "center";
button.style.width = "200px";
button.style.height = "200px";
button.style.borderRadius = "50%";
button.style.border = "5px solid #FFD700"; // Darker brown border
button.style.backgroundColor = "#f4a460"; // Light brown background
button.style.fontSize = "100px"; // Big emoji text
button.style.lineHeight = "150px"; // Align the emoji vertically
button.style.textAlign = "center";
button.style.cursor = `url('${customCursor}'),  auto`;
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
    if (item.amountDisplay){
      item.amountDisplay.textContent = `${item.amount} ${item.name}`;
      item.amountDisplay.classList.add("upgrade-increase");

      // Remove animation class after the animation duration to allow re-trigger
      setTimeout(() => {
        if(item.amountDisplay) item.amountDisplay.classList.remove("upgrade-increase");
      }, 500); // Match the animation duration

    }
    updateCounter();
    updateUpgradeButtons();
    updateButtonLabel(button, item);



    // Remove the animation class after the animation duration (e.g., 0.5s)

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


// Create a fixed container for upgrade amounts in the top right
const upgradeAmountsContainer = document.createElement("div");
upgradeAmountsContainer.style.position = "fixed";
upgradeAmountsContainer.style.top = "10px";
upgradeAmountsContainer.style.right = "10px";
upgradeAmountsContainer.style.display = "flex";
upgradeAmountsContainer.style.flexDirection = "column";
upgradeAmountsContainer.style.alignItems = "flex-end"; // Align text to the right
upgradeAmountsContainer.style.gap = "5px"; // Add space between items
app.appendChild(upgradeAmountsContainer);

const upgradeContainer = document.createElement("div");
upgradeContainer.style.display = "flex";
upgradeContainer.style.flexDirection = "column";
upgradeContainer.style.alignItems = "center";
upgradeContainer.style.gap = "10px";
app.appendChild(upgradeContainer);


//creates each upgrade button itself
function createUpgradeButtons() {
  availableItems.forEach((item) => {

    //make container to hold item data.
    const itemContainer = document.createElement("div");
    itemContainer.style.position = "relative"; // Relative positioning for absolute placement of the counter
    itemContainer.style.display = "flex";
    itemContainer.style.alignItems = "center";
    itemContainer.style.justifyContent = "space-between";
    itemContainer.style.width = "450px";
    itemContainer.style.border = "1px solid #ddd";
    itemContainer.style.padding = "10px";
    itemContainer.style.left = "-40%";
    itemContainer.style.transform = "translate(-50%, 0%)";



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

 

    // used for using custom cursor
    upgradeButton.style.cursor = `url('${customCursor}'),  auto`;

    upgradeButton.style.fontSize = "16px";
    upgradeButton.disabled = true;


    //adds description for buttons when hovering over them
    upgradeButton.title = "rate increases by: " + item.rate;

    // Add event listener for the upgrade button
    upgradeButton.addEventListener("click", () =>
      buyUpgrade(item, upgradeButton),
    );

    //adding amount to the container area with buttons
    const amountDiv = document.createElement("div");
    amountDiv.textContent = `${item.amount} ${item.name}`;
    amountDiv.style.fontSize = "16px";
    item.amountDisplay = amountDiv;
    upgradeAmountsContainer.appendChild(amountDiv);
    // Appends amount and upgradeButton to the itemContainer
    itemContainer.appendChild(amountDiv);
    itemContainer.appendChild(upgradeButton);
    upgradeContainer.appendChild(itemContainer);//itemContainer appended to upgrade Container

    // Store reference to the button for later updates
    item.buttonElement = upgradeButton;
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
button.style.top = "50%";
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
