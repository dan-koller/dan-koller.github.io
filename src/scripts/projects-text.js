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

    // Project 3: JSON database
    document.getElementById("project-description3").innerHTML =
        "Client-server multithreaded database.";

    // Project 4: Mockup banking system
    document.getElementById("project-description4").innerHTML =
        "A basic and secure banking system.";

    // Project 5: Electron screen recorder
    document.getElementById("project-description5").innerHTML =
        "Platform independent screen recorder.";
}