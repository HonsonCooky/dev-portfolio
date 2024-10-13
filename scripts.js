const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  if (btn.onclick) return;

  btn.onclick = function () {
    const href = btn.getAttribute("href");
    if (href.startsWith("#")) window.location = href;
    else window.open(href, "_blank");
  };
});

const details = document.querySelectorAll("details");

details.forEach((detail) => {
  detail.ontoggle = function () {
    if (!this.open) return;

    details.forEach((other) => {
      if (other !== this && other.open){
        other.open = false;
      }
    })
  };
});

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

  img.onclick = function () {};
});
