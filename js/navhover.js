
function openPage(page){
    window.location.href = page;
}

function openMegaPage(page){
    window.location.href = page;
}

function openDetails(){
    window.location.href = "./html/details.html";
}


//books

  function openPage(pageName) {
      window.location.href = pageName;
  }

//search bar
// SEARCH BUTTON FUNCTIONALITY
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let query = input.value.trim();

    if (query.length > 0) {
        // Open Google search results
        window.open(`https://www.google.com/search?q=${query} travel`, "_blank");
    }
});


// document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         const menu = document.querySelector('.navbar-collapse');
//         if (menu.classList.contains('show')) {
//             new bootstrap.Collapse(menu).hide();
//         }
//     });
// });



// document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {

//     // CLICK (mobile + desktop)
//     link.addEventListener('click', () => {
//         closeNavbar();
//     });

//     // HOVER (desktop support)
//     link.addEventListener('mouseenter', () => {
//         closeNavbar();
//     });

// });

// function closeNavbar() {
//     const navbarCollapse = document.querySelector('.navbar-collapse');

//     if (navbarCollapse.classList.contains('show')) {
//         const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
//             toggle: false
//         });
//         bsCollapse.hide();
//     }
// }


document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {

            // ONLY close if navbar is open (mobile)
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }

        });
    });

});




