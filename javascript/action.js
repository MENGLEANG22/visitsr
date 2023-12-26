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

let calcScrollVal = () => {
    let scrollProgress = document.getElementById("progress");
    let progressVal = document.getElementById("progress-val");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollVal = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    // Check if the event listener is already added before adding it
    if (!scrollProgress._clickListenerAdded) {
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        // Mark that the event listener has been added
        scrollProgress._clickListenerAdded = true;
    }

    scrollProgress.style.background = `conic-gradient(#1e90ff ${scrollVal}%, #d7d7d7 ${scrollVal}%)`;
};

// Initial call to calcScrollVal to set up the progress bar
calcScrollVal();

// Event listener for scroll events
window.addEventListener("scroll", calcScrollVal);
