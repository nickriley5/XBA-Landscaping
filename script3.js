document.addEventListener("DOMContentLoaded", function () {
//    search bar
    // Ensure search runs when "Enter" is pressed
    document.getElementById("search-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchSite();
        }
    });

    // Ensure search runs when button is clicked
    document.querySelector("form[role='search']").addEventListener("submit", function (event) {
        event.preventDefault();
        searchSite();
    });
});

function searchSite() {
    let query = document.getElementById("search-input").value.toLowerCase().trim();
    
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    // Define the pages and their corresponding search keywords
    let pages = {
        "home": "index.html",
        "maintenance": "maintenance.html",
        "landscape construction": "landscape-construction.html",
        "construction": "landscape-construction.html",
        "patio": "patio.html",
        "gallery": "gallery.html",
        "faq": "faq.html",
        "contact": "contact.html"
    };

    // Search for an exact match or a partial match in the keys
    let foundPage = Object.keys(pages).find(page => query.includes(page));

    if (foundPage) {
        window.location.href = pages[foundPage]; // Redirect to matched page
    } else {
        alert("No results found. Please try another search term.");
    }
}
