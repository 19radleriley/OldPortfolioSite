document.addEventListener("DOMContentLoaded", startCarousels);

function startCarousels() {
    // Initially show all of the first carousel images
    $(".widget-img.n0").show();

    swapImage("#projects", 0);
    swapImage("#about-me", 500);
    swapImage("#work-experience", 1000);
}

function swapImage(carousel, delay) {
    let count = 0;
    setTimeout(() => {
        setInterval(() => {
            $(`${carousel} .widget-img.n` + count).fadeOut(500, () => {
                    count = (count + 1) % 3;
                    $(`${carousel} .widget-img.n` + count).fadeIn(500);
                });
        }, 7500);
    }, delay)
}
