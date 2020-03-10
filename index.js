// colors

const yellow = "rgb(255, 204, 0)";
const pink = "rgb(245, 60, 152)";

const red = "rgb(235, 31, 31)";
const blue = "rgb(32, 28, 240)";

const azure = "rgb(14, 156, 186)";
const purple = "rgb(128, 28, 88)";

const green = "rgb(101, 153, 19)";
const brown = "rgb(109, 57, 21)";


// Settings

var settings = {
    colorSetting: 0,
    color1: [
        yellow,
        red,
        azure,
        green
        ],
    color2: [
        pink,
        blue,
        purple,
        brown 
    ]
};

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
    modifyStyle(settings.color1[settings.colorSetting], settings.color2[settings.colorSetting]);
});


function modifyStyle(color1, color2) {
    // change CSS colors
    let elements1 = document.querySelectorAll(".my-description", ".nav-links li a:hover");
    let elements2 = document.querySelectorAll(".latex-download-links li a:hover");

    for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.color = settings.color1[settings.colorSetting];
    console.log("changed: ", elements1[i]);
    console.log(settings.color1);
    }

    for (let j = 0; j < elements2.length; j++) {
        elements2[j].style.color = settings.color2[settings.colorSetting];
        }
}
