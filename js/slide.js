function scrollLeft() {
    const slider = document.getElementById("tripScroll");
    slider.scrollBy({
        left: -350,
        behavior: "smooth"
    });
}

function scrollRight() {
    const slider = document.getElementById("tripScroll");
    slider.scrollBy({
        left: 350,
        behavior: "smooth"
    });
}

function openBookingPage() {
    window.location.href = "./html/booking.html";
}
