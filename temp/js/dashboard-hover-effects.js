document.addEventListener("DOMContentLoaded", start);

const TRANSLATE = "translateX(10px)";
const UNTRANSLATE = "translate(0px, 0px)";
const TRANSLATE_NEG = "translateX(-10px)";
const TRANSLATE_UP = "translateY(-10px)";
const TRANSLATE_DOWN = "translateY(10px)";
const TRANSFORM = "transform";
const SCALE = "scale(1.03)";
const UNSCALE = "scale(1)";
const SKILLS = ["#skill1", "#skill2", "#skill3", "#skill4"];

function start() {
    $("#projects").hover(projectsHover, projectsUnhover);
    $("#work-experience").hover(weHover, weUnhover);
    $("#about-me").hover(amHover, amUnhover);
    $("#skills").hover(skillsHover, skillsUnhover);
    SKILLS.forEach(skill => {
        $(skill).hover(() => $(skill).css(TRANSFORM, SCALE),
                       () => $(skill).css(TRANSFORM, UNSCALE));
    });
}

function skillsHover() {
    $("#skills").css(TRANSFORM, SCALE);
    $("#about-me").css(TRANSFORM, TRANSLATE_DOWN);
    $("#work-experience").css(TRANSFORM, TRANSLATE);
    $("#projects").css(TRANSFORM, TRANSLATE_NEG);
}

function skillsUnhover() {
    $("#skills").css(TRANSFORM, UNSCALE);
    $("#about-me").css(TRANSFORM, UNTRANSLATE);
    $("#work-experience").css(TRANSFORM, UNTRANSLATE);
    $("#projects").css(TRANSFORM, UNTRANSLATE);
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

