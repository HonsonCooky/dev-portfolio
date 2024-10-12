const profileImg = document.getElementById("profile-img");
profileImg.onmouseover = () => (profileImg.src = "./assets/imgs/profile.png");
profileImg.onmouseout = () =>
  (profileImg.src = "./assets/imgs/profile-pixel.png");

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
      if (other !== this) other.open = false;
    });
  };
});
