const profileImg = document.getElementById("profile-img");
profileImg.onmouseover = () => (profileImg.src = "./assets/imgs/profile.png");
profileImg.onmouseout = () =>
  (profileImg.src = "./assets/imgs/profile-pixel.png");
