import stonecooking from "./images/cooking.avif";
import showingfood from "./images/showingfood.webp";
import senkuwheat from "./images/senkuwheat.avif";
import Ramenstall from "./images/Ramenstall.webp";
import SenkuEating from "./images/SenkuEating.avif";
import ganeneating from "./images/ganeneating.webp";
import "./styles/home.css";

export default function loadHome() {
const content = document.getElementById("content");
content.innerHTML = ""; // clear previous content

const homeDiv = document.createElement("div");
homeDiv.id = "h0me";

// left top = ramen stall
const imgStall = document.createElement("img");
imgStall.src = Ramenstall;
imgStall.alt = "Ramen Stall";

// right top = heading + description + bio
const textSection = document.createElement("div");
textSection.classList.add("text-section");

const heading = document.createElement("h1");
heading.textContent = "Welcome to the Dr. Stone Ramen Stall!";

const description = document.createElement("p");
description.textContent = "Reviving civilization, one delicious dish at a time";

const bio = document.createElement("p");
bio.textContent =
"From the ashes of the stone world, we bring back the lost flavors of civilization! Every dish here is crafted with the brilliance of science and the spirit of survival. Whether it’s Senku’s famous ramen, the legendary revival cola, or primitive feasts cooked on fire, our meals are guaranteed to be 10 Billion Percent Delicious!";

textSection.appendChild(heading);
textSection.appendChild(description);
textSection.appendChild(bio);

// left bottom = Senku Cooking
const imgCooking = document.createElement("img");
imgCooking.src = stonecooking;
imgCooking.alt = "Senku Cooking";

// right bottom = Gen Eating
const imgGen = document.createElement("img");
imgGen.src = ganeneating;
imgGen.alt = "Gen Eating";

// append in grid order
homeDiv.appendChild(imgStall);
homeDiv.appendChild(textSection);
homeDiv.appendChild(imgCooking);
homeDiv.appendChild(imgGen);
content.appendChild(homeDiv);
}
