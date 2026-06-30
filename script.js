const words = [
    "Front-End Developer",
    "Website Designer",
    "IT Student",
    "Future Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(type, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(type, deleting ? 60 : 120);

}

type();

// Navbar effect when scrolling

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.padding = "12px 8%";
        navbar.style.background = "rgba(17,24,39,.9)";
        navbar.style.backdropFilter = "blur(12px)";

    }

    else {

        navbar.style.padding = "20px 8%";
        navbar.style.background = "#111827";
        navbar.style.backdropFilter = "none";

    }

});

// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

// ==========================
// Active Navigation on Scroll
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = percent + "%";

});