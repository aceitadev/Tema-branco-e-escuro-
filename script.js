var DarkTheme = false;

window.onload = function () {
    if (DarkTheme === true) {
        UpdateTheme();
    } else {
        UpdateTheme();
    }
}

function ChangeTheme() {
    if (DarkTheme === true) {
        DarkTheme = false;
        UpdateTheme();
    } else if (DarkTheme === false) {
        DarkTheme = true;
        UpdateTheme();
    }
}

function UpdateTheme() {
    if (DarkTheme === true) {
        ClearTheme();
        let element = document.body;
        element.className = "Theme-Dark";
        var img = document.createElement('img');
        img.src = "img/DarkTheme.png";
        img.className = "ThemeIcon";
        var container = document.getElementById("ThemeIcon");
        container.appendChild(img);
    } else if (DarkTheme === false) {
        ClearTheme();
        let element = document.body;
        element.className = "Theme-Light";
        var img = document.createElement('img');
        img.src = "img/LightTheme.png";
        img.className = "ThemeIcon";
        var container = document.getElementById("ThemeIcon");
        container.appendChild(img);
    }
}

function ClearTheme() {
    var container = document.getElementById("ThemeIcon");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}