// NAVBAR START
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow", "backdrop-blur-sm", "bg-[#F8F9FA]", "bg-opacity-50")
    } else {
        navbar.classList.remove("shadow", "backdrop-blur-sm", "bg-[#F8F9FA]", "bg-opacity-50")
    }

    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // Sesuaikan offset
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
            link.classList.remove("inactive");
        } else {
            link.classList.remove("active");
            link.classList.add("inactive");
        }
    });
});
// NAVBAR END

// TABS START
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const contents = document.querySelectorAll(".filter-content");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Tampilkan atau sembunyikan konten
            contents.forEach((content) => {
                const category = content.getAttribute("data-category");
                content.style.display = filter === "all" || category === filter ? "block" : "none";
            });

            // Atur tombol aktif
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
// TABS END

// MOVING TEXT START
document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.getElementById("animated-text");
    const texts = ["Web Developer", "Freelancer"];
    let index = 0;

    setInterval(() => {
        // Animasi keluar
        animatedText.style.transform = "translateY(-100%)";

        setTimeout(() => {
            // Perbarui teks setelah animasi keluar
            index = (index + 1) % texts.length; // Berputar ke teks berikutnya
            animatedText.textContent = texts[index];

            // Reset posisi ke bawah untuk animasi masuk
            animatedText.style.transform = "translateY(100%)";

            // Animasi masuk
            setTimeout(() => {
                animatedText.style.transform = "translateY(0)";
            }, 100); // Delay singkat untuk memulai animasi masuk
        }, 500); // Durasi animasi keluar
    }, 3000); // Interval animasi 3 detik
});
// MOVING TEXT END

// TRUNCATE TEXT PARAGRAF START
document.addEventListener("DOMContentLoaded", () => {
    const cardTexts = document.querySelectorAll(".card-text");

    cardTexts.forEach((cardText) => {
        const fullText = cardText.dataset.fullText; // Ambil teks penuh dari data attribute
        const truncatedText = fullText.slice(0, 150) + "..."; // Potong teks

        let isExpanded = false;

        // Set teks awal ke truncate
        cardText.innerHTML = `
            ${truncatedText}
            <span class="toggle-button text-gray-500 cursor-pointer">Show more</span>
        `;

        // Tambahkan event listener untuk setiap card
        cardText.addEventListener("click", (e) => {
            if (e.target.classList.contains("toggle-button")) {
                isExpanded = !isExpanded;

                if (isExpanded) {
                    // Tampilkan teks penuh
                    cardText.innerHTML = `
                        ${fullText}
                        <span class="toggle-button text-gray-500 cursor-pointer">Show less</span>
                    `;
                } else {
                    // Potong kembali teks
                    cardText.innerHTML = `
                        ${truncatedText}
                        <span class="toggle-button text-gray-500 cursor-pointer">Show more</span>
                    `;
                }
            }
        });
    });
});
// TRUNCATE TEXT PARAGRAF END

// INPUT ACTIVE START
function updateBorder(input) {
    if (input.value.trim() !== "") {
        input.classList.add("border-primary-500");
    } else {
        input.classList.remove("border-primary-500");
    }
}
// INPUT ACTIVE END

// SWEETALERT FORM EMAIL START
// Initialize EmailJS
(function() {
    emailjs.init("0qQPNQXYsi6VXAQjZ"); // Replace with your EmailJS User ID
})();

// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send("service_3r5jydk", "template_8qqjg4o", formData)
    .then(response => {
        Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your message has been sent successfully.',
        });
        document.getElementById('contactForm').reset(); // Reset form
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Failed to Send Email',
            text: 'There was an error sending your message. Please try again.',
        });
        console.error("EmailJS Error:", error);
    });
});
// SWEETALERT FORM EMAIL END
