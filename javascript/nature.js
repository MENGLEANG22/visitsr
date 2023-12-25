// ------Switch content--------
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 


// -----Video Control-------
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');

video1.addEventListener('play', function() {
  video2.pause();
  video3.pause();
});

video2.addEventListener('play', function() {
  video1.pause();
  video3.pause();
});

video3.addEventListener('play', function() {
    video1.pause();
    video2.pause();
  });