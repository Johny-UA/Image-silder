let IMAGE_WIDTH = 500;
let DELAY = 3500;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imageContainer = document.querySelector(".image-container");
let image = document.querySelectorAll("img");
let currentImg = 1;


Remove_point = (index)=>{
    imageContainer.style.transform = `translateX(0px)`
        imageContainer.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`;
    }


let updateImg = () => {
    if (currentImg > image.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = image.length;
    }
    imageContainer.style.transform = `translateX(-${
        (currentImg - 1) * IMAGE_WIDTH
    }px)`;

    //  timeout = setTimeout(() => {
    //      currentImg++;
    //      updateImg();
    //  }, DELAY);
};

prev.addEventListener("click", () => {
    //  clearTimeout(timeout);
    currentImg--;
    updateImg();
});

next.addEventListener("click", () => {
    //  clearTimeout(timeout);
    currentImg++;
    updateImg();
});

updateImg();
