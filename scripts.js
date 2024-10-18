const imgs = document.querySelectorAll("img");
function imgMouseOver() {
  this.src = this.getAttribute("hover");
}
function imgMouseOut() {
  this.src = this.getAttribute("default");
}
imgs.forEach((img) => {
  if (!img.src) {
    img.src = img.getAttribute("default");
    img.onmouseover = imgMouseOver;
    img.onmouseout = imgMouseOut;
  }

  img.onclick = function () {
    window.open(
      img.src ?? img.getAttribute("hover") ?? img.getAttribute("default"),
    );
  };
});
