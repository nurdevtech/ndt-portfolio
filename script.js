/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
    main = document.getElementById('main'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        main.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




const text = ["NurDevTech", "Web Developer", "Frontend Developer", "Backend Developer"]; // Array of texts
const span = document.getElementById("animatedText");
let textIndex = 0;
let charIndex = 0;

function typeAnimation() {
    if (charIndex < text[textIndex].length) {
        span.textContent += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeAnimation, 100); // Speed of typing
    } else {
        setTimeout(() => {
            deleteAnimation();
        }, 1500); // Pause before deleting text
    }
}

function deleteAnimation() {
    if (charIndex > 0) {
        span.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteAnimation, 50); // Speed of deleting
    } else {
        textIndex = (textIndex + 1) % text.length; // Move to next text
        setTimeout(typeAnimation, 500); // Pause before typing next text
    }
}

typeAnimation();


const portfolioData = [
    {
        title: "Landing Page",
        description: "A simple, responsive landing page created using HTML and CSS.",
        link: "#",
    },
    {
        title: "To-Do List App",
        description: "A dynamic to-do list application built with JavaScript and local storage functionality.",
        link: "#",
    },
    {
        title: "Weather App",
        description: "A weather forecasting app that fetches data from an API and displays it neatly.",
        link: "#",
    },
];

// Initialize EmailJS with your public key
emailjs.init("CI59K3QHbViGgaPM9"); // Replace with your public key

// Handle the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Form validation
    if (!name || !email || !message) {
        displayMessage("All fields are required.", "error");
        return;
    }

    // Prepare email data
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("viltia40@gmail.com", "template_9vdg83y", templateParams)
        .then(function (response) {
            displayMessage("Thank you for contacting us, " + name + ". We'll get back to you shortly.", "success");
            document.getElementById("contactForm").reset(); // Reset the form
        }, function (error) {
            displayMessage("Oops! Something went wrong. Please try again.", "error");
        });
});

// Function to display success or error message
function displayMessage(message, type) {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = message;
    resultMessage.className = "message " + type;
    resultMessage.style.display = "block";
}
