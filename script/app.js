let activeImage = document.querySelector("#current");
let images = document.querySelectorAll(".images img");
let currentImageTmp = activeImage.src;

function setFadeIn() {
    activeImage.classList.add("fade-in");
    setTimeout(() => { activeImage.classList.remove("fade-in") }, 400);
}

function imgClick(img) {
    console.log(img.target.classList);
        images.forEach((currentImage) => {
            currentImage.classList.remove("active");
        });

        img.target.classList.add("active");
        activeImage.src = img.target.src;
        currentImageTmp = activeImage.src;
        setFadeIn();
}

function startPreview(img) {
    activeImage.src = img.target.src;
}

function stopPreview(img) {
    activeImage.src = currentImageTmp;
}

images.forEach( e => {
    e.addEventListener("click", imgClick);
    e.addEventListener("mouseenter", startPreview);
    e.addEventListener("mouseleave", stopPreview);
});
