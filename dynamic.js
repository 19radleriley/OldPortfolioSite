// Initialize the colors so the event fires on first click
document.documentElement.style.setProperty("--background", "#f0f0f0");
document.documentElement.style.setProperty("--card1", "white");
document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
document.documentElement.style.setProperty("--font1", "rgb(27, 27, 27)");
document.documentElement.style.setProperty("--font2", "#f0f0f0");
document.documentElement.style.setProperty("--border", "none");
document.documentElement.style.setProperty("--box-shadow", "5px 5px 1em gray");
document.documentElement.style.setProperty("--box-shadow-hover", "5px 5px 2em gray");


function changeTheme() 
{
    console.log("I happen")
    // Currently on dark mode => Change to light mode
    if (document.documentElement.style.getPropertyValue("--background") == "rgb(27, 27, 27)")
    {
        document.documentElement.style.setProperty("--background", "#f0f0f0");
        document.documentElement.style.setProperty("--card1", "white");
        document.documentElement.style.setProperty("--card2", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font1", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "none");
        document.documentElement.style.setProperty("--box-shadow", "5px 5px 1em gray");
        document.documentElement.style.setProperty("--box-shadow-hover", "5px 5px 2em gray");
    }
    // Currently on dark mode
    else 
    {
        document.documentElement.style.setProperty("--background", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--card1", "transparent");
        document.documentElement.style.setProperty("--card2", "transparent");
        document.documentElement.style.setProperty("--font1", "#f0f0f0");
        document.documentElement.style.setProperty("--font2", "#f0f0f0");
        document.documentElement.style.setProperty("--border", "2px solid #f0f0f0");
        document.documentElement.style.setProperty("--box-shadow", "none");
        document.documentElement.style.setProperty("--box-shadow-hover", "none");
    }
}
