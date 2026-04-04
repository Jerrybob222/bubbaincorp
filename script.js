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
document.addEventListener("DOMContentLoaded", () => {
  const previewBox = document.getElementById("preview-box");
  const previewIframe = document.getElementById("preview-iframe");
  const previewText = document.getElementById("preview-text");

  // Preview data object — URLs and descriptions left empty
  const previewData = {
    // PC buttons
    dta: { url: "Apps/DTA.html", text: "g†@ style app" },
    raldi: { url: "", text: "" },
    drift: { url: "", text: "" },
    bacon: { url: "", text: "" },
    bbppagelessons: { url: "", text: "" },
    dtr: { url: "", text: "" },
    PeoplePg: { url: "", text: "" },
    Talletail: { url: "", text: "" },
    "b-cksh-t": { url: "", text: "" },
    funnysh0t: { url: "", text: "" },
    cloverp: { url: "", text: "" },
    DRIVINGLESSONS: { url: "", text: "" },
    "bul forcee": { url: "", text: "" },
    hl: { url: "", text: "" },
    suph: { url: "", text: "" },
    ultrak1ll: { url: "", text: "" },

    // Arcade buttons
    yokedsqrt: { url: "", text: "" },
    FNAE: { url: "", text: "" },
    clusteru: { url: "", text: "" },
    driftb: { url: "", text: "" },
    custsupport: { url: "", text: "" },
    tosst: { url: "", text: "" },
    fnafsisterloc: { url: "", text: "" },
    tsimi: { url: "", text: "" },
    ptk1: { url: "", text: "" },
    DLng0m: { url: "", text: "" },
    boxran: { url: "", text: "" },
    s0cc3ran: { url: "", text: "" },

    // Mobile buttons
    "drive-algebra": { url: "", text: "" },
    fnworld: { url: "", text: "" },
    Sd33boxle: { url: "", text: "" },
    brustar: { url: "", text: "" },
    madbird: { url: "", text: "" },
    BlOCKBL: { url: "", text: "" },
    smallworldc: { url: "", text: "" },
    bitl: { url: "", text: "" },
    gag: { url: "", text: "" },
    "p^z1": { url: "", text: "" },
    "p^z2": { url: "", text: "" },
    jetjoy: { url: "", text: "" },
    crazyc3d: { url: "", text: "" },
    snowrir: { url: "", text: "" },
    bbalgebra: { url: "", text: "" },
    fnfriday: { url: "", text: "" }
  };

  let hoverTimer;
  const buttons = document.querySelectorAll(".mathbutton");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", (e) => {
      hoverTimer = setTimeout(() => {
        // Find the class that matches previewData
        const appClass = [...button.classList].find(c => previewData[c]);
        if (appClass) {
          previewIframe.src = previewData[appClass].url;
          previewText.textContent = previewData[appClass].text;

          previewBox.style.left = (e.pageX + 10) + "px";
          previewBox.style.top = (e.pageY + 10) + "px";

          previewBox.classList.add("show");
        }
      }, 2000); // 2-second hover delay
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
});
