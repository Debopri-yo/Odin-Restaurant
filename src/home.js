import stonecooking from "./images/cooking.avif";
import showingfood from "./images/showingfood.webp";
import senkuwheat from "./images/senkuwheat.avif";
import Ramenstall from "./images/Ramenstall.webp";
import SenkuEating from "./images/SenkuEating.avif";

export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content

  const homeDiv = document.createElement("div");
  homeDiv.id = "home";

  // ---- Heading Section ----
  const headingSection = document.createElement("div");
  headingSection.id = "heading";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the Dr. Stone Ramen Stall!";

  const description = document.createElement("p");
  description.textContent =
    "Reviving civilization, one delicious dish at a time";

  headingSection.appendChild(heading);
  headingSection.appendChild(description);

  // ---- Gallery Section ----
  const gallery = document.createElement("div");
  gallery.id = "gallery";

  // Main cooking image
  const imgCooking = document.createElement("img");
  imgCooking.src = stonecooking;
  imgCooking.alt = "Dr. Stone Cooking";

  // Showing food
  const imgShowing = document.createElement("img");
  imgShowing.src = showingfood;
  imgShowing.alt = "Showing Food";

  // Wheat + Ramen Stall side by side
  const row1 = document.createElement("div");
  row1.classList.add("gallery-row");

  const imgWheat = document.createElement("img");
  imgWheat.src = senkuwheat;
  imgWheat.alt = "Senku with Wheat";

  const imgStall = document.createElement("img");
  imgStall.src = Ramenstall;
  imgStall.alt = "Ramen Stall";

  row1.appendChild(imgWheat);
  row1.appendChild(imgStall);

  // Senku Eating
  const imgEating = document.createElement("img");
  imgEating.src = SenkuEating;
  imgEating.alt = "Senku Eating";

  // Add all to gallery
  gallery.appendChild(imgCooking);
  gallery.appendChild(imgShowing);
  gallery.appendChild(row1);
  gallery.appendChild(imgEating);

  // ---- Bio Section ----
  const bioSection = document.createElement("div");
  bioSection.id = "bio";

  const bio = document.createElement("p");
  bio.textContent =
    "From the ashes of the stone world, we bring back the lost flavors of civilization! Every dish here is crafted with the brilliance of science and the spirit of survival. Whether it’s Senku’s famous ramen, the legendary revival cola, or primitive feasts cooked on fire, our meals are guaranteed to be 10 Billion Percent Delicious!";

  bioSection.appendChild(bio);

  // ---- Put everything together ----
  homeDiv.appendChild(headingSection);
  homeDiv.appendChild(gallery);
  homeDiv.appendChild(bioSection);
  content.appendChild(homeDiv);
}
