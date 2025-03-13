// Reviews section
let reviews = document.querySelectorAll(".review");
let index = 0;

function showNextReview() {
    reviews[index].classList.remove("active");
    reviews[index].classList.add("exiting");

    index = (index + 1) % reviews.length;

    reviews[index].classList.remove("exiting");
    reviews[index].classList.add("active");
}

setInterval(showNextReview, 5000); // Changes review every 5 seconds