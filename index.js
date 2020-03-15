/* Setting & Local Storage
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/

var settings = {
    colorSetting: 0,
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
    if (settings.colorSetting < 2) {
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
    // set variables
    let colorSettingString = settings.colorSetting.toString();
    console.log(colorSettingString);
    // change CSS colors

    // color 1 //
    document.getElementById("my-description").className = "my-description color-class-" + colorSettingString + "-0";
    document.getElementById("nav-links").className = "nav-links color-class-" + colorSettingString + "-0";
    // color 2 //
    
    let linkLists = document.getElementsByClassName("link-list");
    for (i = 0; i < linkLists.length; i++) {
    linkLists[i].className = "link-list color-class-" + colorSettingString + "-1";
    }

    let hyperLinks = document.getElementsByClassName("hyperlink");
    for (i = 0; i < hyperLinks.length; i++) {
    hyperLinks[i].className = "hyperlink color-class-" + colorSettingString + "-1";

}
}