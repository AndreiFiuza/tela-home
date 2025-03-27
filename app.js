document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector(".like-button");
    const heartIcon = likeButton.querySelector(".heart-icon");

    likeButton.addEventListener("click", function () {
        heartIcon.classList.toggle("liked");
    });
});
