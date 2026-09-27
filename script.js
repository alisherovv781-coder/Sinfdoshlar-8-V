// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            const opened = navMenu.classList.contains("active");

            icon.classList.toggle("fa-bars", !opened);
            icon.classList.toggle("fa-xmark", opened);
        }
    });
}


// =========================
// NAV MENU LINKLARI
// =========================

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        const icon = menuBtn?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

});


// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

function setThemeIcon() {

    if (!themeBtn) return;

    const icon = themeBtn.querySelector("i");

    if (!icon) return;

    const dark =
        document.body.classList.contains("dark");

    if (dark) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}


if (themeBtn) {

    // Oldingi tanlangan theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    setThemeIcon();

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
                ? "dark"
                : "light"
        );

        setThemeIcon();
    });

}


// =========================
// SINFDOSHLARNI QIDIRISH
// =========================

const searchInput =
    document.getElementById("searchInput");

const studentCards =
    document.querySelectorAll(".student-card");


if (searchInput) {

    searchInput.addEventListener("input", () => {

        const value =
            searchInput.value
                .toLowerCase()
                .trim();

        studentCards.forEach(card => {

            const name =
                (card.dataset.name || "")
                    .toLowerCase();

            if (name.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";
            }

        });

    });

}


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".student-card, .stat-card, .contact-card, .about-content"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);
    });


} else {

    animatedElements.forEach(element => {

        element.style.opacity = "1";

        element.style.transform =
            "translateY(0)";
    });

}


// =========================
// TOAST
// =========================

const toast =
    document.getElementById("toast");

let toastTimer;


function showToast(message) {

    if (!toast) return;

    clearTimeout(toastTimer);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// =========================
// TELEGRAM LINKLAR
// =========================

document
    .querySelectorAll('a[href^="https://t.me/"]')
    .forEach(link => {

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";

        link.addEventListener("click", () => {

            showToast(
                "Telegram ochilmoqda..."
            );

        });

    });


// =========================
// INSTAGRAM LINKLAR
// =========================

document
    .querySelectorAll(
        'a[href^="https://www.instagram.com/"]'
    )
    .forEach(link => {

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";

        link.addEventListener("click", () => {

            showToast(
                "Instagram ochilmoqda..."
            );

        });

    });


// =========================
// BARCHA TASHQI LINKLAR
// =========================

document
    .querySelectorAll('a[target="_blank"]')
    .forEach(link => {

        link.rel =
            "noopener noreferrer";

    });


// =========================
// SAYT OCHILGANDA
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        showToast(
            "Bizning sinf saytimizga xush kelibsiz! 👋"
        );

    }, 800);

});