
function toggleSearch() {
    const dropdown = document.getElementById("searchDropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}

function goTo(sectionClass) {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    document.getElementById("searchDropdown").style.display = "none";
}

/* Close dropdown when clicking outside */
document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-wrapper")) {
        document.getElementById("searchDropdown").style.display = "none";
    }
});


