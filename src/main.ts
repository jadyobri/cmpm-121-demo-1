import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Clicking Combo";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//Used generative AI for start
const button = document.createElement("button");

button.textContent = "😀";
button.addEventListener("click", () => {
    alert("Button clicked");
})

button.style.position = "absolute";
button.style.top = "70%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.padding = "10px 20px"; // Optional: make the button look better
button.style.fontSize = "16px"; // Optional: adjust font size

document.body.appendChild(button);