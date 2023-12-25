
 
var mustKnowContent = document.querySelector(".mustKnow");
var btnMore = document.querySelector(".readmore");
var btnClose = document.querySelector(".close");

function toggleReadMore() {
    btnMore.classList.toggle("readmore");

    if (btnMore.classList.contains("readmore")) {
        readMore.innerHTML = "អានលម្អិត";
        readMore.classList.add("btn-outline-primary");
        readMore.classList.remove("btn-outline-danger");
        mustKnowContent.style.display = "none";
        btnClose.style.display = "none";
    } else {
        readMore.innerHTML = "បិទ";
        readMore.classList.remove("btn-outline-primary");
        readMore.classList.add("btn-outline-danger");
        mustKnowContent.style.display = "block";
        btnClose.style.display = "block";
    }
}

// Must-Know Place Button
readMore.onclick = toggleReadMore;
btnClose.onclick = function () {
    btnMore.classList.toggle("readmore");
    btnClose.style.display = "none";
    readMore.innerHTML = "អានលម្អិត";  
    readMore.classList.add("btn-outline-primary");
    readMore.classList.remove("btn-outline-danger");
    mustKnowContent.style.display = "none";
};


// Must-Know Content
const contents = document.querySelectorAll('.content');
contents.forEach(content => {
    content.addEventListener('click', event => {
        const current = event.target;
        const isReadMoreBtn = current.className.includes('read-more-btn');
        
        if (!isReadMoreBtn) return;
        
        const currentText = event.target.parentNode.querySelector('.read-more');
        currentText.classList.toggle('read-more--show');
        
        current.textContent = current.textContent.includes('អានបន្ត...') ? "បិទ" : "អានបន្ត...";
    });
});


