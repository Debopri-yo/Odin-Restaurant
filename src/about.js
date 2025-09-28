import c0verpic from "./images/showingfood.webp"
import "./styles/about.css";
export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = "";
    const aboutDiv = document.createElement('div');
    aboutDiv.id="ab0ut";
    const coverpic = document.createElement('img');
    coverpic.src=c0verpic;
    const aboutText = document.createElement('p');
    aboutText.textContent = "In a world turned to stone, one genius chef has revived the art of cooking — 10 Billion Percent! At Dr. Stone Ramen Stall, we blend survival-era recipes with modern taste, inspired by Senku and the Kingdom of Science. From legendary ramen to the revival cola that sparked joy across civilizations, every dish is a step forward in humanity’s culinary evolution. Join us for an adventure where science and flavor come together to create meals worthy of Ishigami Village.";
    const tagline = document.createElement('h2');
    tagline.textContent = "Reviving civilization, one delicious dish at a time";
    aboutDiv.appendChild(coverpic);
    aboutDiv.appendChild(aboutText);
    aboutDiv.appendChild(tagline);
    content.appendChild(aboutDiv);
}