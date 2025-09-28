import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
function clearContent() {
    const content = document.getElementById('content');
    content.textContent = '';
}
document.getElementById('home').addEventListener('click', ()=>{
    clearContent();
    loadHome();
});
loadHome();
document.getElementById('m3nu').addEventListener('click', ()=>{
    clearContent();
    loadMenu();
});
document.getElementById('about').addEventListener('click', ()=>{
    clearContent();
    loadAbout();
});