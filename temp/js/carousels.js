document.addEventListener("DOMContentLoaded", swapImage);

function swapImage() {
    let count = 0;
    setInterval(() => {
        $("#projects .widget-img." + count).removeAttr('data-visible');
        count = (count + 1) % 3;
        $("#projects .widget-img." + count).attr('data-visible', '');
        console.log(count);
    }, 5000);
}