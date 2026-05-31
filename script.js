document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SMOOTH SCROLLING FOR NAVBAR LINKS
    // ==========================================
    const navLinks = document.querySelectorAll("header nav ul li a, .hero-buttons a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            // Only apply smooth scroll if it's an anchor link pointing to a section on this page
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Pushes view down cleanly while factoring in your floating navbar height
                    const navbarHeight = document.querySelector("header").offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // ==========================================
    // 2. INTERACTIVE CART ENGINE
    // ==========================================
    let cartCount = 0;
    const cartNav = document.getElementById("cart-nav");
    const addToCartButtons = document.querySelectorAll(".btn-add-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Ticks up our counter variable
            cartCount++;
            
            // Update the navigation display text immediately
            if (cartNav) {
                cartNav.innerText = `🛒 Cart (${cartCount})`;
            }

            // Smooth visual feedback animation on the clicked button
            const originalText = button.innerText;
            const itemName = button.getAttribute("data-item") || "Item";
            
            button.innerText = "✓ Added to Order";
            button.style.backgroundColor = "#2e7d32"; // Turns an appetizing green
            button.style.color = "#ffffff";
            
            // Reverts button text and style back to original state after 1 second
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = ""; // Resets to CSS defaults
                button.style.color = "";
            }, 1000);
        });
    });

    // ==========================================
    // 3. BOOKING FORM MANAGER
    // ==========================================
    const reserveForm = document.querySelector(".reserve-form");
    
    if (reserveForm) {
        reserveForm.addEventListener("submit", (e) => {
            // Stops page from performing a full page refresh
            e.preventDefault();
            
            // Grab inputs inside the form
            const nameInput = reserveForm.querySelector('input[type="text"]').value;
            const dateInput = reserveForm.querySelector('input[type="date"]').value;
            const timeInput = reserveForm.querySelector('input[type="time"]').value;
            const guestsInput = reserveForm.querySelector('select').value;

            // Trigger a clean template literal layout alert screen
            alert(`🎉 Table Reserved!\n\nThank you, ${nameInput}.\nWe have successfully booked a spot for ${guestsInput} guest(s) on ${dateInput} at ${timeInput}.\n\nA confirmation has been sent to your email!`);
            
            // Resets form fields back to empty placeholders
            reserveForm.reset();
        });
    }
});