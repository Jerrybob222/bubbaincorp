function toggleNav(){

    const navbar = document.getElementById("navbar");
    const button = document.getElementById("toggleBtn");

    navbar.classList.toggle("hidden");

    if(navbar.classList.contains("hidden")){
        button.textContent = "Show";
    }else{
        button.textContent = "Hide";
    }

}





// Function used by navbar button
function cloak() {
    document.title = "New Tab";
    let icon = document.querySelector("link[rel~='icon']");
    if (icon) icon.href = "/images/psicon.png";
}

// Add event listener after navbar is loaded
function initNavbar() {
    const navButton = document.querySelector(".nav-button");
    if (navButton) {
        navButton.addEventListener("click", cloak);
    }
}

// Load navbar dynamically
fetch("/navbar.html")
    .then(r => r.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        initNavbar(); // set up button listeners
    })
    .catch(err => console.error("Navbar failed to load:", err));
