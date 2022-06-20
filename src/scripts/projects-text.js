// This scripts changes the project description based on the device size to make it more readable

// Grab the window width
var windowWidth = window.innerWidth;

if (windowWidth < 950) {
    // Project 1: Code sharing platform
    document.getElementById("project-description1").innerHTML =
        "A platform to store and share code.";

    // Project 2: Accounting service
    document.getElementById("project-description2").innerHTML =
        "Secure accounting service with role system.";

    // Project 3: SQLite viewer
    document.getElementById("project-description3").innerHTML =
        "Standalone SQLite viewer for multiple platforms.";

    // Project 4: JSON database
    document.getElementById("project-description4").innerHTML =
        "Multithreaded client-server database.";

    // Project 5: Mockup banking system
    document.getElementById("project-description5").innerHTML =
        "A basic and secure banking system.";

    // Project 5: Weather web app
    document.getElementById("project-description6").innerHTML =
        "Weather app for selected locations.";

    // Project 5: Minesweeper
    document.getElementById("project-description7").innerHTML =
        "Minesweeper made modern with React.";
}
