const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    if (!img.src) {
        img.src = img.getAttribute("default");
        img.onmouseover = function () {
            this.src = this.getAttribute("hover");
        };
        img.onmouseout = function () {
            this.src = this.getAttribute("default");
        };
    }

    img.onclick = function () {
        window.open(
            img.src ?? img.getAttribute("hover") ?? img.getAttribute("default"),
        );
    };
});
