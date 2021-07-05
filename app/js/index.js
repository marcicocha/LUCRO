var acc = document.getElementsByClassName("accordion");
var myVideo = document.getElementById("video");
var playButton = document.querySelector(".playImage");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function playPause() {
  console.log("VIDEO ClIcKED");
  console.log(myVideo, "VIDEO");
  if (myVideo.paused) {
    myVideo.play();
    playButton.classList.add("display-none");
    playButton.classList.remove("display-block");
  } else {
    myVideo.pause();
    playButton.classList.add("display-block");
    playButton.classList.remove("display-none");
  }
}
