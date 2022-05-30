function scoreAdd() {
    score__numberPlus.innerHTML = parseInt(score__numberPlus.innerText) + 1;
}

function scoreRemove() {
    score__numberMinus.innerHTML = parseInt(score__numberMinus.innerText) - 1;
}

function scoreReset() {
    score__numberPlus.innerHTML = 0;
    score__numberMinus.innerHTML = 0;
}


const languages = document.querySelectorAll(".language");
const listLinks = document.querySelectorAll(".list__link");


listLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        listLinks.forEach((e) => {
            e.className = "list__link";
        });
        link.className = "list__link active";
        header_nav.className = "header__nav " + this.dataset.type;
        world_map.className = "world_map " + this.dataset.type;
        if (link.dataset.type != "geography") {
            settings__block.style.display = "none"
        } else {
            settings__block.style.display = "flex"
        }
    });
});



settings__circle.addEventListener("click", function () {
    settings__circle.classList = "settings__circle";
    settings.classList = "settings__list active";
});

close__icon.addEventListener("click", function () {
    settings.classList = "settings__list";
    settings__circle.classList = "settings__circle active";
});




// languages.forEach((lng) => {
//     lng.addEventListener("click", function () {
//         language__selected.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].src;
//         language__selected.getElementsByTagName("span")[0].innerHTML = this.getElementsByTagName("span")[0].innerHTML;
//     });
// });


var tempBlock1 = document.createElement("div");
tempBlock1.setAttribute("class", "language__block");
var tempBlock2 = document.createElement("a")
tempBlock2.setAttribute("class", "language__selected");
tempBlock2.setAttribute("id", "language__selected");
var tempBlock3 = document.createElement("img")
tempBlock3.setAttribute("src", "");
var tempBlock4 = document.createElement("span");
var tempBlock5 = document.createElement("p")
tempBlock5.setAttribute("class", "language__arrow");
tempBlock5.innerHTML = "&#709;"
var tempBlock6 = document.createElement("div")
tempBlock6.setAttribute("class", "language__set");
tempBlock6.setAttribute("id", "language__set");

tempBlock2.appendChild(tempBlock3);
tempBlock2.appendChild(tempBlock4);
tempBlock2.appendChild(tempBlock5);
tempBlock1.appendChild(tempBlock2);
tempBlock1.appendChild(tempBlock6);
document.getElementById("listPointWithLanguages").appendChild(tempBlock1)