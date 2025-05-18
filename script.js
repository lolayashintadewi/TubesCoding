document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(el => el.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Highlight section based on scroll position (optional)
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll(".content-section");
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 80) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
