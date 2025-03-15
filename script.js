document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("header h1").addEventListener("click", function () {
        this.textContent = "Reforest - Let's Go Green!";
    });

    document.querySelector(".contact a").addEventListener("click", function (event) {
        event.preventDefault();
        alert("You can email us at: rk@reforest.co.in");
    });
});
