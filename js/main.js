// Offset this script until all of the HTML content is loaded
document.addEventListener("DOMContentLoaded", start);

// Start the flow of the page
function start(event) {
    // Set up information
    initTheme();
    addSkills();
    addRecentProjects();

    // Add event listeners 
    document.querySelector(".fa-lightbulb").addEventListener("click", toggleTheme);
    document.querySelector(".fa-envelope").addEventListener("click", toggleContact); 
    document.querySelector(".nav-toggler").addEventListener("click", toggleNav);
    document.getElementById("contact-back").addEventListener("click", toggleContact);
    document.getElementById("contact-send").addEventListener("click", sendEmail);
}

/* 
 * This function controls the behavior of the navbar
 * at smaller screen sizes by hiding or showing it.
 */
function toggleNav() {
    let navToggler = document.querySelector("span.nav-toggler");
    let nav = document.querySelector("nav");
    
    if (navToggler.getAttribute("in") == "true") {
        navToggler.setAttribute("in", "false");
        nav.setAttribute("in", "false");
    }
    else {
        navToggler.setAttribute("in", "true");
        nav.setAttribute("in", "true");
    }
}

/* ========== Section for emailing and contacting me ========== */


/* 
 * This function uses a resource called emailjs to 
 * allow emails to be sent directly from an html form.
 */
function sendEmail() {

    let emailInfo = {
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value,
    } 

    // Make sure the inputs are at lease truthy before proceeding
    if (emailInfo.from_email && emailInfo.subject && emailInfo.body) {
        emailjs.send("service_l7dq1vm", "template_ob3dn51", emailInfo)
        .then(response => {
            alert("Email sent successfully! Thank you! :)")
        });

        // Clear the inputs 
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("body").value = "";

        toggleContact();
    }
}

/* 
 * This function shows / hides the contact / email card.
 */
function toggleContact() {
    let contactVisible =  document.querySelector(".contact-page").getAttribute("data-visible");

    if (contactVisible == "false") {
        document.querySelector("main").setAttribute("data-visible", "false");
        document.querySelector("footer").setAttribute("data-visible", "false");
        document.querySelector(".contact-page").setAttribute("data-visible", "true");
    }
    else {
        document.querySelector("main").setAttribute("data-visible", "true");
        document.querySelector("footer").setAttribute("data-visible", "true");
        document.querySelector(".contact-page").setAttribute("data-visible", "false");
    }
}

/* ========== Section for influencing the theme of the site ========== */

/* 
 * This function initializes the theme of the page when it is loaded.
 * It determines this based on the session content of the browser.
 */
function initTheme() 
{
    let currentTheme = sessionStorage.getItem("currentTheme");

    // Initialize to light mode
    if (currentTheme == "light")
    {
        document.documentElement.style.setProperty("--background", "#f0f0f0");
        document.documentElement.style.setProperty("--background2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--card1", "white");
        document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font1", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "none");
        document.documentElement.style.setProperty("--box-shadow", "5px 5px 1em gray");
        document.documentElement.style.setProperty("--box-shadow-hover", "5px 5px 2em gray");
        document.documentElement.style.setProperty("--background-img", "url('../images/PortfolioBackgroundLight.png')")
        sessionStorage.setItem("currentTheme", "light");
    }
    // Initialize to dark mode
    else 
    {
        document.documentElement.style.setProperty("--background", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--background2", "#f0f0f0");
        document.documentElement.style.setProperty("--card1", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font1", "#f0f0f0");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "2px solid #f0f0f0");
        document.documentElement.style.setProperty("--box-shadow", "none");
        document.documentElement.style.setProperty("--box-shadow-hover", "none");
        document.documentElement.style.setProperty("--background-img", "url('../images/PortfolioBackgroundDark.png')")
        sessionStorage.setItem("currentTheme", "dark")
    }
}

/* 
 * This function toggles the theme of the page from light to 
 * dark and vice versa.
 */
function toggleTheme() {
    let currentTheme = sessionStorage.getItem("currentTheme");

    // Change to light mode
    if (currentTheme == "dark")
    {
        document.documentElement.style.setProperty("--background", "#f0f0f0");
        document.documentElement.style.setProperty("--background2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--card1", "white");
        document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font1", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "none");
        document.documentElement.style.setProperty("--box-shadow", "5px 5px 1em gray");
        document.documentElement.style.setProperty("--box-shadow-hover", "5px 5px 2em gray");
        document.documentElement.style.setProperty("--background-img", "url('../images/PortfolioBackgroundLight.png')")
        sessionStorage.setItem("currentTheme", "light");
    }
    // Change to dark mode
    else 
    {
        document.documentElement.style.setProperty("--background", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--background2", "#f0f0f0");
        document.documentElement.style.setProperty("--card1", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font1", "#f0f0f0");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "2px solid #f0f0f0");
        document.documentElement.style.setProperty("--box-shadow", "none");
        document.documentElement.style.setProperty("--box-shadow-hover", "none");
        document.documentElement.style.setProperty("--background-img", "url('../images/PortfolioBackgroundDark.png')")
        sessionStorage.setItem("currentTheme", "dark")
    } 
}

/* ========== Section for adding content to page ========== */

// List of skill objects
let skills = [
    {"name": "Java", "level": "90"},
    {"name": "Photoshop", "level": "80"},
    {"name": "C", "level": "60"},
    {"name": "Django", "level": "70"},
    {"name": "Illustrator", "level": "70"},
    {"name": "Python", "level": "60"},
    {"name": "HTML", "level": "80"},
    {"name": "CSS", "level": "80"},
    {"name": "JS", "level": "60"},
]

// List of recent project objects
let recentProjects = [
    {
        "name" : "Event-Planner",
        "tech" : ["HTML/CSS", "JS/EJS"], 
        "description" : 'This is a web app designed for a local non-profit "Aptiv".  It has the following functionalities: create / log into user accounts, view and "volunteer" for upcoming events, "donate" to upcoming events, and "donate" to the Aptiv organization',
        "link" : "https://github.com/19radleriley/Event-Planner-Scheduler"
    },
    {
        "name" : "Tic Tac Toe",
        "tech" : ["Java"], 
        "description" : "This is single/double player tic tac toe engine.  It uses some simple AI to allow for the user to play on multiple difficuties. The graphics were made with the JSwing library.",
        "link" : "https://github.com/19radleriley/Unbeatable-Tic-Tac-Toe"
    },
    {
        "name" : "Art Store",
        "tech" : ["Django", "Python", "HTML/CSS"], 
        "description" : 'This is an art store I created to hypothetically promote my art. Users can browse the store, add items to their cart, and "checkout".',
        "link" : "https://github.com/19radleriley/ArtSite-SourceCode"
    },
    {
        "name" : "Simulation",
        "tech" : ["Java", "Desmo-J"], 
        "description" : "This is a simple simuation I made after taking a course on simulation in Spring 2021.  It simulates an auto-body shop and explores the optimal number of workers and car stalls to maximize the profits of the shop.",
        "link" : "https://github.com/19radleriley/AutoBodyShopSimulation"
    }
];

/* 
 * This function adds the skill objects to the DOM
 */
function addSkills() {
    let skillList = document.querySelector(".skill-list");
    let skillsArticle = document.querySelector(".skills");

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.setAttribute("name", skill["name"]);
        li.setAttribute("level", skill["level"]);
        li.appendChild(document.createTextNode(skill["name"]));
        skillList.appendChild(li);

        li.addEventListener("click", investigateSkill);

        let header = document.createElement("header");
        let h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode(skill["name"]));
        header.appendChild(h1);
        addSkillBar(header, skill)
        header.setAttribute("data-visible", "false");
        header.setAttribute("id", skill["name"]);
        skillsArticle.appendChild(header);
    });
}

/* 
 * This function displays more information about 
 * a particular skill when it is clicked
 */
function investigateSkill(event) {
    let skill = event.srcElement.getAttribute("name");
    let newHeader = document.getElementById(skill);
    let currentHeader = document.querySelector('.skills header[data-visible="true"]')
    currentHeader.setAttribute("data-visible", "false");
    newHeader.setAttribute("data-visible", "true");
}

/* 
 * This function adds a 'skill' bar to visually 
 * display my knowledge of that skill
 */
function addSkillBar(header, skill) {
    let container = document.createElement("div");
    container.setAttribute("style", "width: 100%; height: 25%; margin: .5em 0;")
    let outer = document.createElement("div");
    let inner = document.createElement("div");
    header.appendChild(container);

    outer.setAttribute("style", 
        "width: 50%; height: 100%;" +
        "border: 1px solid rgb(26, 197, 140);" +
        "border-radius: .25em"
    );

    container.appendChild(outer);

    inner.setAttribute("style", 
        "width: " + skill["level"] + "%; height: 100%;" +
        "background-color: rgb(26, 197, 140);"
    );

    outer.appendChild(inner);
}

/* 
 * This function adds the recent project objects to the DOM
 */
function addRecentProjects() {
    let recentContainer = document.querySelector("article.recent");

    recentProjects.forEach(project => {
        let container = document.createElement("div");

        let a = document.createElement("a");
        a.setAttribute("class", "recent-project");
        a.setAttribute("href", project["link"]);

        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode(project["name"]));

        let info = document.createElement("div");
        info.setAttribute("class", "project-info");

        let ul = document.createElement("ul");
        ul.appendChild(document.createTextNode("Technologies: "));

        project["tech"].forEach(tech => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(tech));
            ul.appendChild(li);
        });
        let description = document.createElement("p");
        description.appendChild(document.createTextNode(project["description"]));

        let b = document.createElement("b");
        b.appendChild(document.createTextNode("View Project"));

        // Add all of the content to the container
        recentContainer.appendChild(a);
        a.appendChild(container);
        container.appendChild(h2);
        container.appendChild(info);
        info.appendChild(ul);
        info.appendChild(description);
        a.appendChild(b);
    });
}





