import "./styles/menu.css";
import revivalCola from "./images/senkucola.png";
export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    const menuItems=[
        { name: "Senku’s Ramen", description: "The legendary ramen that revived the village’s spirit.", Image: revivalCola },
        { name: "Revival Cola", description: "Cola is science — fizzy and refreshing!" },
        { name: "Chrome’s Crystal Candy", description: "Sweet, colorful crystals from the lab." }
    ];
    for (let item of menuItems) {
        const itemCard = document.createElement("div");
        itemCard.class="itemCard";
        const title = document.createElement("h3");
        title.textContent = item.name;
        const desc = document.createElement("p");
        desc.textContent = item.description;
        itemCard.appendChild(title);
        itemCard.appendChild(desc);
        if (item.Image) {
            const img = document.createElement("img");
            img.src = item.Image;
            img.alt = item.name;
            itemCard.appendChild(img);
        }
        menuDiv.appendChild(itemCard);
    }
    content.appendChild(menuDiv);
}