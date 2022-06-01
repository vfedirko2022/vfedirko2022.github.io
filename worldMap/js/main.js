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

const points = document.querySelectorAll(".popup__point");



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


function informationAboutTheUniversities(infoAboutTheUnivs) {
    console.log(infoAboutTheUnivs);
    document
        .getElementById("popup-main-p2")
        .setAttribute("style", "display:block");
    document.getElementById("body").classList += " popup_active";
}

function informationAboutTheCountry(infoAboutTheCntr) {
    console.log(infoAboutTheCntr);
    document.querySelectorAll(".popup__svg").forEach((map) => {
        map.setAttribute("viewBox", infoAboutTheCntr.Map.viewBox);
    });

    document.querySelectorAll(".popup__svg__path").forEach((path) => {
        path.setAttribute("d", infoAboutTheCntr.Map.d);
    });
    var i = 0;

    infoAboutTheCntr.Mountains.forEach((mountain) => {
        document
            .querySelectorAll(".popup__svg__mountain")
        [i].setAttribute("d", mountain.position);
        i++;
    });
    i = 0;

    infoAboutTheCntr.Rivers.forEach((river) => {
        document
            .querySelectorAll(".popup__svg__river")
        [i].setAttribute("d", river.position);
        i++;
    });
}


function getBodyScrollTop() {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    );
}

function fadeInPopUp(country) {
    var nameCountry = country.dataset.title;
    popup__title.innerText = nameCountry;

    document
        .getElementById("popup-main-p1")
        .setAttribute("style", "display:block");
    document.getElementById("body").classList += "popup_active";
}


// ------------------------------------------------ START EVENTLISTENERS ON POINTS ----------------------------------

points.forEach((point) => {
    point.addEventListener("click", function () {
        points.forEach((point) => {
            point.classList = "popup__point";
        });
        this.classList = "popup__point active";
        var typeOfThePoint = this.dataset.type;
        if (typeOfThePoint == "mountains") {
            document
                .querySelectorAll(".popup__svg__mountain")
                .forEach((mountain) => {
                    mountain.setAttribute("style", "display: block");
                });
        }
        if (typeOfThePoint == "rivers") {
            document.querySelectorAll(".popup__svg__river").forEach((river) => {
                river.setAttribute("style", "display: block");
            });
        }
        informations.forEach((information) => {
            information.classList = "popup__information";
            if (information.dataset.type == typeOfThePoint) {
                information.classList = "popup__information active";
            }
        });
        maps.forEach((map) => {
            map.classList = "popup__svg";
            console.log(typeOfThePoint);
            if (map.dataset.type == typeOfThePoint) {
                map.classList = "popup__svg active";
            }
        });
    });
});

// ------------------------------------------------ END EVENTLISTENERS ON POINTS ----------------------------------




document.addEventListener("mouseup", function (e) {
    var popup = $(".popup-container");
    var popupclose = $(".popup__close-icon");
    if (
        (e.target != popup[0] && popup.has(e.target).length === 0,
            e.target.classList == "popup__close-icon")
    ) {
        document.getElementById("popup-main-p1").removeAttribute("style");
        document.getElementById("popup-main-p2").removeAttribute("style");
        document.getElementById("body").classList.remove("popup_active");
    }
    if (e.target.classList == "popup__close-icon") {
        document.getElementById("popup-main-p1").removeAttribute("style");
        document.getElementById("popup-main-p2").removeAttribute("style");
        document.getElementById("body").classList.remove("popup_active");
    }
});