document.addEventListener("DOMContentLoaded", setNavigation);

function setNavigation() {
    $("#to-dashboard").on("click", toDashboard);
}

function toDashboard() {
    $("#home").fadeOut(500, () => {
        $("#dashboard").fadeIn(500);
    });
}