document.addEventListener("DOMContentLoaded", function() {
    let x = 0,
        y = 0,
        dirX = 1,
        dirY = 1;
    const speed = 2;
    const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
    let dvd = document.getElementById("dvd");
    dvd.style.backgroundColor = pallete[0];
    let black = document.getElementById("black");
    const dvdWidth = dvd.clientWidth;
    const dvdHeight = dvd.clientHeight;
    let animationId; // variable to store animation frame ID

    function getNewRandomColor() {
        const currentPallete = [...pallete]
        const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
        const colorChoice = currentPallete[colorChoiceIndex];
        return colorChoice;
    }

    function animate() {
        const screenHeight = black.clientHeight;
        const screenWidth = black.clientWidth;

        if (y + dvdHeight >= screenHeight || y < 0) {
            dirY *= -1;
            dvd.style.backgroundColor = getNewRandomColor();
        }
        if (x + dvdWidth >= screenWidth || x < 0) {
            dirX *= -1;
            dvd.style.backgroundColor = getNewRandomColor();
        }
        x += dirX * speed;
        y += dirY * speed;
        dvd.style.left = x + "px";
        dvd.style.top = y + "px";
        animationId = window.requestAnimationFrame(animate); // store animation frame ID
    }
    window.requestAnimationFrame(animate); // start animation




    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY || window.pageYOffset; // Handle cross-browser compatibility
        if (scrollY >= 100) {
            dvd.classList.add("offDvd");
        } else {
            dvd.classList.remove("offDvd");
        }
    });
});
