function goToPage(page) {
    document.querySelectorAll(".page").forEach(p => {
        if (p.id === page) p.classList.add("active");
        else p.classList.remove("active");
    });
}

function toggleTheme() {
    const currentTheme = document.getAttribute("data-theme");
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.setAttribute("data-theme", newTheme);
}

/* =============================================================================
Start Up Actions - Wrapped to ensure however this script is loaded, we're
executing with references to DOM elements.
============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Light theme is the default. Toggle the theme if dark is preferred.
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) toggleTheme();

    // Listen to hash changes, and open the page matching the hash
    
});