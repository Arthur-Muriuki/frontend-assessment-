/**
 * script.js
 * Handles interactive elements for the Investment Club Dashboard.
 * Specifically manages the accordion-style toggling of membership details.
 */

// Wait for the HTML document to be fully loaded before running any scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // DOM Element Selections
    // ==========================================================================
    
    // Foundation Membership Elements
    const btnFoundation = document.getElementById("btn-foundation");
    const descFoundation = document.getElementById("desc-foundation");

    // Economy Membership Elements
    const btnEconomy = document.getElementById("btn-economy");
    const descEconomy = document.getElementById("desc-economy");

    // ==========================================================================
    // Event Listeners
    // ==========================================================================

    // Toggle Foundation Membership details
    btnFoundation.addEventListener("click", () => {
        // Toggle the Bootstrap "d-none" (display: none) utility class
        descFoundation.classList.toggle("d-none");
    });

    // Toggle Economy Membership details
    btnEconomy.addEventListener("click", () => {
        // Toggle the Bootstrap "d-none" (display: none) utility class
        descEconomy.classList.toggle("d-none");
    });
    
});