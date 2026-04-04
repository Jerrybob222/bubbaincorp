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










    /* previewer of apps */




const previewBox = document.getElementById("preview-box");
const previewImg = document.getElementById("preview-img");
const previewText = document.getElementById("preview-text");

let hoverTimer;

const previewData = {
  dta: {
    img: "images/favicon.png",
    text: "Open math ."
  },
  raldi: {
    img: "images/raldi.png",
    text: "Weird ela ."
  },
  drift: {
    img: "images/drift.png",
    text: "Simple science  "
  }
};

const buttons = document.querySelectorAll(".mathbutton");

buttons.forEach(button => {

  button.addEventListener("mouseenter", (e) => {
    // start 2-second timer
    hoverTimer = setTimeout(() => {
      // find preview class
      const gameClass = [...button.classList].find(c => previewData[c]);
      if (gameClass) {
        previewImg.src = previewData[gameClass].img;
        previewText.textContent = previewData[gameClass].text;

        // position near mouse
        previewBox.style.left = (e.pageX + 10) + "px";
        previewBox.style.top = (e.pageY + 10) + "px";

        // fade in
        previewBox.classList.add("show");
      }
    }, 2000); // 2 seconds
  });

  button.addEventListener("mouseleave", () => {
    // cancel hover timer if not done
    clearTimeout(hoverTimer);

    // fade out
    previewBox.classList.remove("show");
  });

});



button.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);      // stops the timer if 2 seconds not reached
    previewBox.classList.remove("show"); // fade out
});


button.addEventListener("mouseenter", (e) => {
    hoverTimer = setTimeout(() => {
        previewBox.classList.add("show"); // fade in
    }, 2000);
});
