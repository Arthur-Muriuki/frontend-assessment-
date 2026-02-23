document.addEventListener("DOMContentLoaded", () => {
    // Select elements for Foundation Membership
    const btnFoundation = document.getElementById("btn-foundation");
    const descFoundation = document.getElementById("desc-foundation");

    // Select elements for Economy Membership
    const btnEconomy = document.getElementById("btn-economy");
    const descEconomy = document.getElementById("desc-economy");

    // Add click event listener for Foundation
    btnFoundation.addEventListener("click", () => {
        // Toggle the Bootstrap "d-none" (display: none) utility class
        descFoundation.classList.toggle("d-none");
    });

    // Add click event listener for Economy
    btnEconomy.addEventListener("click", () => {
        descEconomy.classList.toggle("d-none");
    });
});