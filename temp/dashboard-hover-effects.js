document.addEventListener("DOMContentLoaded", start);

const TRANSLATE = "translateX(10px)";
const UNTRANSLATE = "translate(0px, 0px)";
const TRANSLATE_NEG = "translateX(-10px)";
const TRANSLATE_UP = "translateY(-10px)"
const TRANSFORM = "transform";
const SCALE = "scale(1.03)";
const UNSCALE = "scale(1)";

function start() {
    $("#projects").hover(projectsHover, projectsUnhover);
    $("#work-experience").hover(weHover, weUnhover);
    $("#about-me").hover(amHover, amUnhover);
}

function projectsHover() {
    $("#projects").css(TRANSFORM, SCALE);
    $("#center-widgets").css(TRANSFORM, TRANSLATE);
    $("#work-experience").css(TRANSFORM, TRANSLATE);
}

function projectsUnhover() {
    $("#projects").css(TRANSFORM, UNSCALE);
    $("#center-widgets").css(TRANSFORM, UNTRANSLATE);
    $("#work-experience").css(TRANSFORM, UNTRANSLATE);
}

function weHover() {
    $("#work-experience").css(TRANSFORM, SCALE);
    $("#center-widgets").css(TRANSFORM, TRANSLATE_NEG);
    $("#projects").css(TRANSFORM, TRANSLATE_NEG);
}

function weUnhover() {
    $("#work-experience").css(TRANSFORM, UNSCALE);
    $("#center-widgets").css(TRANSFORM, UNTRANSLATE);
    $("#projects").css(TRANSFORM, UNTRANSLATE);
}

function amHover() {
    $("#about-me").css(TRANSFORM, SCALE);
    $("#projects").css(TRANSFORM, TRANSLATE_NEG);
    $("#work-experience").css(TRANSFORM, TRANSLATE);
    $("#skills").css(TRANSFORM, TRANSLATE_UP);
}

function amUnhover() {
    $("#about-me").css(TRANSFORM, UNSCALE);
    $("#work-experience").css(TRANSFORM, UNTRANSLATE);
    $("#projects").css(TRANSFORM, UNTRANSLATE);
    $("#skills").css(TRANSFORM, UNTRANSLATE);
}