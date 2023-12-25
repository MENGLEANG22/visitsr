var menu = document.getElementById("menu");
function togglebtn() {
    menu.classList.toggle("hidemenu");
};
var icon = document.getElementById("icon");
icon.onclick = function(){
document.body.classList.toggle("dark-theme");
if (document.body.classList.contains("dark-theme")){
    icon.src = "./images/sun.png";
}else{
    icon.src = "./images/moon2.png";
}
}