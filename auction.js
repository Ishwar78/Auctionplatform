// Fetch URL Parameters and Update Page
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");
    const productImage = params.get("image");
    const productPrice = params.get("price");

    if (productName) document.getElementById("productName").textContent = productName;
    if (productImage) document.getElementById("productImage").src = productImage;
    if (productPrice) document.getElementById("productPrice").textContent = productPrice;
});

// Countdown Timer (Simulated Auction Ending Time)
const countdownElement = document.getElementById("countdown");
let timeLeft = 3600; // 1 Hour in Seconds

function updateCountdown() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    countdownElement.textContent = `${hours}:${minutes}:${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    } else {
        countdownElement.textContent = "Auction Ended";
    }
}

updateCountdown();
