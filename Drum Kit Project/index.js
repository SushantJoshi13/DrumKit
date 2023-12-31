var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keypress", handlepress);

function handlepress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      alert("Use Keys 'w,a,s,d,j,k,l'");
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
