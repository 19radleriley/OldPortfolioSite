// Initialize the colors so the event fires on first click
document.documentElement.style.setProperty("--foreground", "black");
document.documentElement.style.setProperty("--background1", "#f0f0f0");
document.documentElement.style.setProperty("--background2", "white");


function changeTheme() 
{
    console.log("I happen")
    // Currently on light mode
    if (document.documentElement.style.getPropertyValue("--foreground") == "black")
    {
        document.documentElement.style.setProperty("--foreground", "#f0f0f0");
        document.documentElement.style.setProperty("--background1", "black")
        document.documentElement.style.setProperty("--background2", "black")
    }
    // Currently on dark mode
    else 
    {
        document.documentElement.style.setProperty("--foreground", "black");
        document.documentElement.style.setProperty("--background1", "#f0f0f0");
        document.documentElement.style.setProperty("--background2", "white");
    }
}