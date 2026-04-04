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
const previewIframe = document.getElementById("preview-iframe");
const previewText = document.getElementById("preview-text");

const previewData = {
  dta: {
    url: "PC/dta.html",
    text: "Lesson about: A g†@ style educaion"
  },
  raldi: {
    url: "PC/.html",
    text: "Weird math horror game."
  },
  drift: {
    url: "PC/.html",
    text: "Simple but addictive drifting game."
  }
};

let hoverTimer;

const buttons = document.querySelectorAll(".mathbutton");

buttons.forEach(button => {
  button.addEventListener("mouseenter", (e) => {
    hoverTimer = setTimeout(() => {
      const appClass = [...button.classList].find(c => previewData[c]);
      if (appClass) {
        previewIframe.src = previewData[appClass].url;
        previewText.textContent = previewData[appClass].text;

        previewBox.style.left = (e.pageX + 10) + "px";
        previewBox.style.top = (e.pageY + 10) + "px";

        previewBox.classList.add("show");
      }
    }, 2000); // 2-second hover
  });

  button.addEventListener("mousemove", (e) => {
    if (previewBox.classList.contains("show")) {
      previewBox.style.left = (e.pageX + 10) + "px";
      previewBox.style.top = (e.pageY + 10) + "px";
    }
  });

  button.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
    previewBox.classList.remove("show");
  });
});

