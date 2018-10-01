var slidePosition = 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > x.length) {
    slidePosition = 1;
  }
  x[slidePosition - 1].style.display = "block";
  setTimeout(slideShow, 0300);
}