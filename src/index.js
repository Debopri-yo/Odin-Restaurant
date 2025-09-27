import loadHome from "./home";
import loadMenu from "./menu";
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