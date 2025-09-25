import loadHome from "./home";
function clearContent() {
    const content = document.getElementById('content');
    content.textContent = '';
}
document.getElementById('home').addEventListener('click', ()=>{
    clearContent();
    loadHome();
});
loadHome();