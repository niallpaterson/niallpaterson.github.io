/* Setting & Local Storage
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/

var settings = {
    colorSetting: 0,
    color1: [
        "rgb(255, 204, 0)", // yellow
        "rgb(235, 31, 31)", // red
        "rgb(14, 156, 186)", // azure
        "rgb(101, 153, 19)" // green
        ],
    color2: [
        "rgb(245, 60, 152)", // pink
        "rgb(32, 28, 240)", // blue
        "rgb(128, 28, 88)", // purple
        "rgb(109, 57, 21)" // brown
    ]
};

// user opens page => search local storage for setting
window.onload = storageSearch();

// if localStorage has setting, convert string to numeral and modify setting
function storageSearch() {
if (localStorage.setting) {
let localSetting = localStorage.getItem("setting");
let parsedLocal = parseInt(localSetting); 
settings.colorSetting = parsedLocal;
console.log("Retrived Setting from Local Storage.");
modifyStyle();
}
}

// modify local storage setting
function updateStorage() {
localStorage.setItem("setting", settings.colorSetting.toString()); 
console.log("Updated Local Storage.");
}

/* Color Changer
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/
var colorChangeButton = document.getElementById("colorChanger");

// User clicks button
colorChangeButton.addEventListener("click", function() {
    // 1. If colorSetting is less than max, increment. Else, reset to 0.
    if (settings.colorSetting < settings.color1.length - 1) {
    settings.colorSetting += 1;
    } else {
    settings.colorSetting = 0; 
    }
    // 2. Add colorclasses at position colorSetting to relevant elements.
    modifyStyle();
    // 3. Update Local Storage
    updateStorage();
});

// change color style of css classes
function modifyStyle() {
    // change CSS colors
    let elements1 = document.querySelectorAll(".my-description", ".nav-links li a:hover");
    let elements2 = document.querySelectorAll(".latex-download-links li a:hover"); 

    for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.color = settings.color1[settings.colorSetting];
    }

    for (let j = 0; j < elements2.length; j++) {
        elements2[j].style.color = settings.color2[settings.colorSetting];
        }
}