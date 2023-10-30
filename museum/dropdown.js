document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("dropdown");
    const dropdownContent = document.getElementById("dropdown-content");

    dropdown.addEventListener("mouseover", function () {
        dropdownContent.classList.remove("hidden");
    });

    dropdown.addEventListener("mouseout", function () {
        dropdownContent.classList.add("hidden");
    });
});
