document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-button");

    prevButton.addEventListener("click", function () {
        window.history.back();
    });
});
