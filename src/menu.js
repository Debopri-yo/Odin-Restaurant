import "./styles/menu.css";
import revivalCola from "./images/senkucola.png";
import ramen from "./images/Ramen.webp";
import spicycola from "./images/spicycola.png";
import cinderella from "./images/cinderella.png";
import tealatte from "./images/tealatte.png";
import tonic from "./images/tonic.png";
import Sunshine from "./images/2ssunshine.png";
export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    const menuItems=[
        { name: "Senku’s Ramen", description: "The legendary ramen that revived the village’s spirit.", Image: ramen },
        { name: "Revival Cola", description: "Cola is science — fizzy and refreshing!", Image: revivalCola },
        { name: "Gen’s Spicy Cola", description:" It's Coca-Cola for adults?A cola with a kick, just like Gen himself.", Image: spicycola },
        { name: "Kohaku’s Piquant Cinderella", description: "Taste like a sparkling sunset!", Image:cinderella },
        { name: "Three Layer Tea Latte", description: "A perfect trio of matcha whipped cream, milk and hojicha syrup presented in the cleanest aesthetic.", Image: tealatte },
        { name: "Tsukasa’s Grenadine & Tonic", description: "Fruity flavor of pomegrante counterbalanced with the lsight bitterness of tonic water. So refreshing!", Image: tonic},
        { name: "Suika’s Two Side Sunshine", description: "Light, fun and cute. The perfect representation of Suika!", Image: Sunshine },
    ]
    for (let item of menuItems) {
        const itemCard = document.createElement("div");
        itemCard.className="itemCard";
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
            img.className = "menuImage";
            itemCard.appendChild(img);
        }
        menuDiv.appendChild(itemCard);
    }
    content.appendChild(menuDiv);
}