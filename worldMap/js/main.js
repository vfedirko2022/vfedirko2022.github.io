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
const informations = document.querySelectorAll(".popup__information");
const points = document.querySelectorAll(".popup__point");
const tooltip3 = document.querySelector(".tooltip3");
const maps = document.querySelectorAll(".popup__svg");



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
    popup__table.innerHTML = ""

    var tempTRMain = document.createElement("tr")
    tempTRMain.className = "first__tr"
    var tempTH1 = document.createElement("th");
    tempTH1.id = "worldRanking";
    var tempTH2 = document.createElement("th");
    tempTH2.id = "countryRanking";
    var tempTH3 = document.createElement("th");
    tempTH3.id = "name";
    var tempTH4 = document.createElement("th");
    tempTH4.id = "city";
    var tempTH5 = document.createElement("th");
    tempTH5.id = "type";
    var tempTH6 = document.createElement("th");
    tempTH6.id = "enrollment";
    var tempTH7 = document.createElement("th");
    tempTH7.id = "costOfBachelor";
    var tempTH8 = document.createElement("th");
    tempTH8.id = "costOfMaster";
    var tempTH9 = document.createElement("th");
    tempTH9.id = "hostel";
    var tempTH10 = document.createElement("th");
    tempTH10.id = "exchangeProgram";
    var tempTH11 = document.createElement("th");
    tempTH11.id = "actions";
    tempTRMain.appendChild(tempTH1);
    tempTRMain.appendChild(tempTH2);
    tempTRMain.appendChild(tempTH3);
    tempTRMain.appendChild(tempTH4);
    tempTRMain.appendChild(tempTH5);
    tempTRMain.appendChild(tempTH6);
    tempTRMain.appendChild(tempTH7);
    tempTRMain.appendChild(tempTH8);
    tempTRMain.appendChild(tempTH9);
    tempTRMain.appendChild(tempTH10);
    tempTRMain.appendChild(tempTH11);
    popup__table.appendChild(tempTRMain)

    infoAboutTheUnivs.forEach((infoAbTheUn) => {
        var tempTR = document.createElement("tr")
        var tempTD1 = document.createElement("td")
        tempTD1.innerText = infoAbTheUn.WorldRanking;
        var tempTD2 = document.createElement("td")
        tempTD2.innerText = infoAbTheUn.CountryRanking;
        var tempTD3 = document.createElement("td");
        tempTD3.innerText = infoAbTheUn.Name;
        var tempTD4 = document.createElement("td");
        tempTD4.innerText = infoAbTheUn.City;
        var tempTD5 = document.createElement("td");
        tempTD5.innerText = infoAbTheUn.Type;
        var tempTD6 = document.createElement("td");
        tempTD6.innerText = infoAbTheUn.Enrollment;
        var tempTD7 = document.createElement("td");
        tempTD7.innerText = infoAbTheUn.CostOfBachelor;
        var tempTD8 = document.createElement("td");
        tempTD8.innerText = infoAbTheUn.CostOfMaster;
        var tempTD9 = document.createElement("td");
        tempTD9.innerText = infoAbTheUn.Hostel;
        var tempTD10 = document.createElement("td");
        tempTD10.innerText = infoAbTheUn.ExchangeProgram;
        var tempTD11 = document.createElement("td");
        tempTD11.dataset.idoftheuniversity = infoAbTheUn.Id;
        tempTR.appendChild(tempTD1);
        tempTR.appendChild(tempTD2);
        tempTR.appendChild(tempTD3);
        tempTR.appendChild(tempTD4);
        tempTR.appendChild(tempTD5);
        tempTR.appendChild(tempTD6);
        tempTR.appendChild(tempTD7);
        tempTR.appendChild(tempTD8);
        tempTR.appendChild(tempTD9);
        tempTR.appendChild(tempTD10);
        tempTR.appendChild(tempTD11);
        popup__table.appendChild(tempTR)
    })
    document
        .getElementById("popup-main-p2")
        .setAttribute("style", "display:block");
    document.getElementById("body").classList += " popup_active";
}

function informationAboutTheCountry(infoAboutTheCntr) {
    console.log(infoAboutTheCntr);
    //console.log(document.getElementById("popupGeneralInformation").children[0].children[0]);

    popupGeneralInformation.children[0].children[0].innerText = infoAboutTheCntr.Name;
    popupGeneralInformation.children[0].children[1].src = infoAboutTheCntr.GeneralInformation.Flag

    popupInformationAboutTheMountains.children[0].children[0].innerText = infoAboutTheCntr.Name;
    popupInformationAboutTheMountains.children[0].children[1].src = infoAboutTheCntr.GeneralInformation.Flag

    popupInformationAboutTheRivers.children[0].children[0].innerText = infoAboutTheCntr.Name;
    popupInformationAboutTheRivers.children[0].children[1].src = infoAboutTheCntr.GeneralInformation.Flag

    popupGeneralInformation.children[0].children[1].addEventListener("mouseenter", (e) => {
        tooltip3.style.display = "block";
        tooltip3.children[0].src = e.target.src;
    })
    popupGeneralInformation.children[0].children[1].addEventListener("mousemove", (e) => {
        tooltip3.style.top = getBodyScrollTop() + 15 + e.y + "px";
        tooltip3.style.left = 15 + e.x + "px";
    })
    popupGeneralInformation.children[0].children[1].addEventListener("mouseleave", () => {
        tooltip3.style.display = "none";
    });

    popupInformationAboutTheMountains.children[0].children[1].addEventListener("mouseenter", (e) => {
        tooltip3.style.display = "block";
        tooltip3.children[0].src = e.target.src;
    })
    popupInformationAboutTheMountains.children[0].children[1].addEventListener("mousemove", (e) => {
        tooltip3.style.top = getBodyScrollTop() + 15 + e.y + "px";
        tooltip3.style.left = 15 + e.x + "px";
    })
    popupInformationAboutTheMountains.children[0].children[1].addEventListener("mouseleave", () => {
        tooltip3.style.display = "none";
    });

    popupInformationAboutTheRivers.children[0].children[1].addEventListener("mouseenter", (e) => {
        tooltip3.style.display = "block";
        tooltip3.children[0].src = e.target.src;
    })
    popupInformationAboutTheRivers.children[0].children[1].addEventListener("mousemove", (e) => {
        tooltip3.style.top = getBodyScrollTop() + 15 + e.y + "px";
        tooltip3.style.left = 15 + e.x + "px";
    })
    popupInformationAboutTheRivers.children[0].children[1].addEventListener("mouseleave", () => {
        tooltip3.style.display = "none";
    });


    popupGeneralInformation.children[1].children[0].innerText = infoAboutTheCntr.GeneralInformation.Capital;
    popupGeneralInformation.children[1].children[1].innerText = infoAboutTheCntr.GeneralInformation.President;
    popupGeneralInformation.children[1].children[2].innerText = infoAboutTheCntr.GeneralInformation.PremierMinister;
    popupGeneralInformation.children[1].children[3].innerText = infoAboutTheCntr.GeneralInformation.Polity
    popupGeneralInformation.children[1].children[4].innerText = infoAboutTheCntr.GeneralInformation.Square
    popupGeneralInformation.children[1].children[5].innerText = infoAboutTheCntr.GeneralInformation.Population
    popupGeneralInformation.children[1].children[6].innerText = infoAboutTheCntr.GeneralInformation.FoundationDate
    popupGeneralInformation.children[1].children[7].innerText = infoAboutTheCntr.GeneralInformation.Currency
    popupGeneralInformation.children[1].children[8].innerText = infoAboutTheCntr.GeneralInformation.Language


    console.log(popupInformationAboutTheMountains)




    document.querySelectorAll(".popup__svg").forEach((map) => {
        map.setAttribute("viewBox", infoAboutTheCntr.GeneralInformation.Map.viewBox);
    });
    document.querySelectorAll(".popup__svg__path").forEach((path) => {
        path.setAttribute("d", infoAboutTheCntr.GeneralInformation.Map.d);
    });

    var i = 0;
    infoAboutTheCntr.Mountains.forEach((mountain) => {
        document
            .querySelectorAll(".popup__svg__mountain")
        [i].setAttribute("d", mountain.position);
        i++;
    });

    // i = 0;
    // infoAboutTheCntr.InformationAboutTheRivers.Rivers.forEach((river) => {
    //     document
    //         .querySelectorAll(".popup__svg__river")
    //     [i].setAttribute("d", river.position);
    //     i++;
    // });
}

var j = 0;
function moreGeneralInformationAboutTheCountry() {
    if (j == 0) {
        popupLeftColumn.style.display = "none";
        popupRightColumn.style.display = "block";
        moreGenetalInformationAboutTheCountryButton.dataset.stage = "1";
        j++;
    } else if (j == 1) {
        popupLeftColumn.style.display = "block";
        popupRightColumn.style.display = "none";
        moreGenetalInformationAboutTheCountryButton.dataset.stage = "0";
        j--;
    }
}

var n = 0;
function moreInformationAboutTheMountains() {
    if (n == 0) {
        popupLeftColumn.style.display = "none";
        popupRightColumn.style.display = "block";
        moreInformationAboutTheMountainsButton.dataset.stage = "1";
        n++;
    } else if (n == 1) {
        popupLeftColumn.style.display = "block";
        popupRightColumn.style.display = "none";
        moreInformationAboutTheMountainsButton.dataset.stage = "0";
        n--;
    }
}

var m = 0;
function moreInformationAboutTheRiver() {
    if (m == 0) {
        popupLeftColumn.style.display = "none";
        popupRightColumn.style.display = "block";
        moreInformationAboutTheRiverButton.dataset.stage = "1";
        m++;
    } else if (m == 1) {
        popupLeftColumn.style.display = "block";
        popupRightColumn.style.display = "none";
        moreInformationAboutTheRiverButton.dataset.stage = "0";
        m--;
    }
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
    document.getElementById("body").classList += " popup_active";
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