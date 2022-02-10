window.wantReload = {
    bool: true
}

function changeTheme() {
    temp_body = document.getElementById("body")
    if (temp_body.className == "darktheme") {
        console.log("1111>>>>>>>>>")
        temp_body.setAttribute("class", "whitetheme")
        document.getElementById("choiseTheme").setAttribute("style", "color: black;")
        document.getElementById("theme_color").innerText = "темну"
        document.getElementsByTagName("header")[0].children[1].setAttribute("style", "color: black;")
        document.getElementById("result_block").children[1].setAttribute("style", "color: black;")
        document.getElementById("rules").setAttribute("style", "color: black;")
        document.getElementById("result").setAttribute("style", "background-color: #eee;")
        document.getElementById("test").setAttribute("style", "background-color: #eee;")
    }
    else {
        temp_body.setAttribute("class", "darktheme")
        document.getElementById("choiseTheme").setAttribute("style", "color: rgb(230, 230, 230);")
        document.getElementById("theme_color").innerText = "світлу"
        document.getElementsByTagName("header")[0].children[1].setAttribute("style", "color: rgb(230, 230, 230);")
        document.getElementById("result_block").children[1].setAttribute("style", "color: rgb(230, 230, 230);")
        document.getElementById("result").setAttribute("style", "background-color: white;")
        document.getElementById("test").setAttribute("style", "background-color: white;")
        document.getElementById("rules").setAttribute("style", "color: white")
    }
}











numbers = [
    ["один", "один", "one"],
    ["два", "два", "two"],
    ["три", "три", "three"],
    ["четыре", "чотири", "four"],
    ["пять", "п'ять", "five"],
    ["шесть", "шість", "six"],
    ["сем", "сім", "seven"],
    ["восем", "вісім", "eight"],
    ["девять", "дев'ять", "nine"],
    ["десять", "десять", "ten"],
    ["одиннадцать", "одинадцять", "eleven"],
    ["двенадцать", "дванадцять", "twelve"],
    ["тринадцать", "тринадцять", "thirteen"],
    ["четырнадцать", "чотирнадцять", "fourteen"],
    ["пятьнадцать", "п'ятнадцять", "fifteen"],
    ["шестнадцать", "шістнадцять", "sixteen"],
    ["семнадцать", "сімнадцять", "seventeen"],
    ["восемнадцать", "вісмнадцять", "eighteen"],
    ["девятнадцать", "дев'ятнадцять", "nineteen"],
    ["двадцать", "двадцять", "twenty"],
    ["двадцать один", "двадцять один", "twenty one"],
    ["двадцать два", "двадцять два", "twenty two"],
    ["двадцать три", "двадцять три", "twenty three"],
    ["двадцать четыре", "двадцять чотири", "twenty four"],
    ["двадцать пять", "двадцять п'ять", "twenty five"],
    ["двадцать шесть", "двадцять шість", "twenty six"],
    ["двадцать сем", "двадцять сім", "twenty seven"],
    ["двадцать восем", "двадцять вісім", "twenty eight"],
    ["двадцать девять", "двадцять дев'ять", "twenty nine"],
    ["тридцать", "тридцять", "thirty"],
    ["тридцать один", "тридцять один", "thirty one"],
    ["тридцать два", "тридцять два", "thirty two"],
    ["тридцать три", "тридцять три", "thirty three"],
    ["тридцать четыре", "тридцять чотири", "thirty four"],
    ["тридцать пять", "тридцять п'ять", "thirty five"],
    ["тридцать шесть", "тридцять шість", "thirty six"],
    ["тридцать сем", "тридцять сім", "thirty seven"],
    ["тридцать восем", "тридцять вісім", "thirty eight"],
    ["тридцать девять", "тридцять дев'ять", "thirty nine"],
    ["сорок", "сорок", "fourty"],
    ["сорок один", "сорок один", "fourty one"],
    ["сорок два", "сорок два", "fourty two"],
    ["сорок три", "сорок три", "fourty three"],
    ["сорок четыре", "сорок чотири", "fourty four"],
    ["сорок пять", "сорок п'ять", "fourty five"],
    ["сорок шесть", "сорок шість", "fourty six"],
    ["сорок сем", "сорок сім", "fourty seven"],
    ["сорок восем", "сорок вісім", "fourty eight"],
    ["сорок девять", "сорок дев'ять", "fourty nine"],
    ["пятьдесят", "п'ятдесят", "fifty"],
    ["пятьдесят один", "п'ятдесят один", "fifty one"],
    ["пятьдесят два", "п'ятдесят два", "fifty two"],
    ["пятьдесят три", "п'ятдесят три", "fifty three"],
    ["пятьдесят четыре", "п'ятдесят чотири", "fifty four"],
    ["пятьдесят пять", "п'ятдесят п'ять", "fifty five"],
    ["пятьдесят шесть", "п'ятдесят шість", "fifty six"],
    ["пятьдесят сем", "п'ятдесят сім", "fifty seven"],
    ["пятьдесят восем", "п'ятдесят вісім", "fifty eight"],
    ["пятьдесят девять", "п'ятдесят дев'ять", "fifty nine"],
    ["шестьдесят", "шістьдесят", "sixty"],
    ["шестьдесят один", "шістьдесят один", "sixty one"],
    ["шестьдесят два", "шістьдесят два", "sixty two"],
    ["шестьдесят три", "шістьдесят три", "sixty three"],
    ["шестьдесят четыре", "шістьдесят чотири", "sixty four"],
    ["шестьдесят пять", "шістьдесят п'ять", "sixty five"],
    ["шестьдесят шесть", "шістьдесят шість", "sixty six"],
    ["шестьдесят сем", "шістьдесят сім", "sixty seven"],
    ["шестьдесят восем", "шістьдесят вісім", "sixty eight"],
    ["шестьдесят девять", "шістьдесят дев'ять", "sixty nine"],
    ["семдесят", "сімдесят", "seventy"],
    ["семдесят один", "сімдесят один", "seventy one"],
    ["семдесят два", "сімдесят два", "seventy two"],
    ["семдесят три", "сімдесят три", "seventy three"],
    ["семдесят четыре", "сімдесят чотири", "seventy four"],
    ["семдесят пять", "сімдесят п'ять", "seventy five"],
    ["семдесят шесть", "сімдесят шість", "seventy six"],
    ["семдесят сем", "сімдесят сім", "seventy seven"],
    ["семдесят восем", "сімдесят вісім", "seventy eight"],
    ["семдесят девять", "сімдесят дев'ять", "seventy nine"],
    ["восемдесят", "вісімдесят", "eighty"],
    ["восемдесят один", "вісімдесят один", "eighty one"],
    ["восемдесят два", "вісімдесят два", "eighty two"],
    ["восемдесят три", "вісімдесят три", "eighty three"],
    ["восемдесят четыре", "вісімдесят чотири", "eighty four"],
    ["восемдесят пять", "вісімдесят п'ять", "eighty five"],
    ["восемдесят шесть", "вісімдесят шість", "eighty six"],
    ["восемдесят сем", "вісімдесят сім", "eighty seven"],
    ["восемдесят восем", "вісімдесят вісім", "eighty eight"],
    ["восемдесят девять", "вісімдесят дев'ять", "eighty nine"],
    ["девяносто", "дев'яносто", "ninety"],
    ["девяносто один", "дев'яносто один", "ninety one"],
    ["девяносто два", "дев'яносто два", "ninety two"],
    ["девяносто три", "дев'яносто три", "ninety three"],
    ["девяносто четыре", "дев'яносто чотири", "ninety four"],
    ["девяносто пять", "дев'яносто п'ять", "ninety five"],
    ["девяносто шесть", "дев'яносто шість", "ninety six"],
    ["девяносто сем", "дев'яносто сім", "ninety seven"],
    ["девяносто восем", "дев'яносто вісім", "ninety eight"],
    ["девяносто девять", "дев'яносто дев'ять", "ninety nine"],
    ["сто", "сто", "one hundred"]
]

function check() {
    chck = document.getElementById("test").value.replace(/ +/g, ' ').trim().split(" ");
    console.log(chck);
    len_chck = chck.length;
    last_chck = chck[len_chck - 1];
    if (last_chck == "=" || last_chck == "дорівнює" || last_chck == "равно" || last_chck == "equals") {
        test();
    }
}


function wordToNumber(word, numbers) {
    new_temp = ""
    p = parseFloat(word);
    //console.log("numbers" + " " + numbers)
    for (k = 0; k < numbers.length; k++) {
        for (y = 0; y < numbers[k].length; y++) {
            if (word == numbers[k][y]) {
                word = parseInt(k) + 1;
                new_temp += word;
                break;
            }
        }
    }
    if (p) {
        new_temp += p;
    }
    else {
        switch (word) {
            case "плюс":
                new_temp += " + ";
                break;
            case "добавити":
                new_temp += " + ";
                break;
            case "минус":
                new_temp += " - ";
                break;
            case "відняти":
                new_temp += " - ";
                break;
            case "умножить":
                new_temp += " * ";
                break;
            case "помножити":
                new_temp += " * ";
                break;
            case "поделить":
                new_temp += " / ";
                break;
            case "поділити":
                new_temp += " / ";
                break;
            case "открыть":
                new_temp += " ( ";
                break;
            case "open":
                new_temp += " ( ";
                break;
            case "відкрити":
                new_temp += " ( ";
                break;
            case "закрыть":
                new_temp += " ) ";
                break;
            case "close":
                new_temp += " ) ";
                break;
            case "закрити":
                new_temp += " ) ";
                break;
            case "степень":
                new_temp += "**";
                break;
            case "степені":
                new_temp += "**";
                break;
            case "степінь":
                new_temp += "**";
                break;
            case "degree":
                new_temp += "**";
                break;
            case "точка":
                new_temp += ".";
                break;
            case "крапка":
                new_temp += ".";
                break;
            case ".":
                new_temp += ".";
                break;
            case "степінь":
                new_temp += " ";
                break;
            case "**":
                new_temp += "**";
                break;
            case ")":
                new_temp += " ) ";
                break;
            case "(":
                new_temp += " ( ";
                break;
            case "+":
                new_temp += " + ";
                break;
            case "-":
                new_temp += " - ";
                break;
            case "*":
                new_temp += " * ";
                break;
            case "/":
                new_temp += " / ";
                break;
            default:
                new_temp += ""
                break;
        }
    }
    return new_temp;
}


// проверка на большие числа (2 слова)
function checkArr(arr) {
    console.log("arr in function " + arr)

    if (arr.forEach(e => { console.log("forEach " + e); if (e == "степінь" || e == "степень" || e == "degree") { return true; } })) {
        console.log("степень есть")
    }

    for (i = 0; i < arr.length; i++) { // соединение чисел состоящих из двух цифр
        tempText = arr[i] + " " + arr[i + 1];
        console.log(i + " tempText " + tempText)
        for (j = 0; j < numbers.length; j++) {
            for (r = 0; r < numbers[j].length; r++) {
                if (tempText == numbers[j][r]) {
                    t = arr[i + 1];
                    arr[i] += " " + t;
                    arr.splice(i + 1, 1);
                    arr[i] = j + 1
                    console.log("check arr " + arr[i])
                }
            }
        }
    }
    return arr;
}

k = 0;
const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;


let pn = document.createElement('input');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
    /*if (e.result[0].isFinal) {
        pn = document.createElement('input');
    }*/
    document.getElementById("test").value = text
})



wantReload = true
recognition.addEventListener('end', () => {
    console.log(10)
    if (window.wantReload) {
        recognition.start();
    }
    test();
})

function turn_on() {
    console.log(window.wantReload)
    recognition.start();
}

function turn_off() {
    console.log(window.wantReload)
    recognition.stop();
}

function test() {
    console.log("START TEST ==============================")
    second_temp = '';
    temp = document.getElementById("test").value.replace(/ +/g, ' ').trim().split(" ");
    temp = checkArr(temp);
    temp.forEach(e => {
        second_temp += wordToNumber(e, numbers);
    });
    console.log(parseFloat(eval(second_temp)))
    if (parseFloat(eval(second_temp))) {
        result = Math.round(eval(second_temp) * 100) / 100;
    }
    else {
        result = "Произошла ошибка."
    }
    document.getElementById("test").value = second_temp;
    document.getElementById("result").innerHTML = result;
    convertTextToSpeech(result);
    createHistory(second_temp, result)

}




const U = new SpeechSynthesisUtterance()
let voices = speechSynthesis.getVoices()
speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices()
    populateVoices(voices)
}

function populateVoices(voices) {
    // Перебираем голоса и создаем элемент `option` для каждого
    // Текстовым содержимым `option` является название голоса, а значением - индекс голоса в массиве голосов
    voices.forEach((voice, index) => {
        select.options[index] = new Option(voice.name, index)
    })

    // Делаем голосом по умолчанию `Google русский`
    const defaultVoiceIndex = voices.findIndex(
        (voice) => voice.name === 'Google русский'
    )
    select.selectedIndex = defaultVoiceIndex
    // После этого инициализируем обработчики событий
    //initializeHandlers()
}

var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/* Выбор языка ввода примера */
recognition.lang = "uk-UA";
function choiseLanguage() {
    recognition.lang = choise_language.value;
    console.log(choise_language.value)
}





















$(document).ready(function () {
    $('#body').keypress(function (e) {
        if (e.keyCode == 13) {
            $('#turn_on').click();
            wantReload = true;
        };
        if (e.key == "s") {
            wantReload = false;
            turn_off();
        };
    });
});



// function handleChange(el) {
//     el.nextElementSibling.textContent = el.value
// }

function createHistory(first, second) {
    new_storage = document.getElementById("storage")
    new_p = document.createElement("p");
    new_span_1 = document.createElement("span");
    new_span_1.setAttribute("class", "example")
    new_span_1.innerHTML = first;
    new_span_2 = document.createElement("span");
    new_span_2.setAttribute("class", "result");
    new_span_2.innerHTML = second;
    document.getElementById("history").setAttribute("style", "display:none")
    new_p.appendChild(new_span_1);
    new_p.innerHTML += " = ";
    new_p.appendChild(new_span_2);
    new_storage.appendChild(new_p);
}

function convertTextToSpeech(res) {
    // Получаем текст
    if (parseFloat(res)) {
        trimmed = "Результат: " + res;
    }
    else {
        trimmed = res;
    }
    if (!trimmed) return
    // Передаем его экземпляру `SpeechSynthesisUtterance`
    U.text = trimmed
    // Получаем выбранный голос
    const voice = voices[select.value]
    // Передаем голос и другие настройки экземпляру
    U.voice = voice
    // язык
    U.lang = voice.lang
    // громкость
    U.volume = volume.value
    // скорость
    U.rate = rate.value
    // высота голоса
    U.pitch = pitch.value
    // Запускаем озвучивание!
    speechSynthesis.speak(U)
}

function initializeHandlers() {
    // U.onstart = () => console.log('Started')
    // U.onend = () => console.log('Finished')
    // U.onerror = (err) => console.error(err)
    // U.onpause = () => console.log('Paused')
    // U.onresume = () => console.log('Resumed')
    // // wrapper.onchange = ({ target }) => {
    // //     if (target.type !== 'range') return
    // //     handleChange(target)
    // // }

    // buttons.addEventListener('click', ({ target: { className } }) => {
    //     // SpeechSynthesis предоставляет таким методы как `speak()`, `cancel()`, `pause()` и `resume()`
    //     // Вызов метода `speak()` требует предварительной подготовки
    //     // Кроме того, мы проверяем наличие текста в очереди на озвучивание с помощью атрибута `speaking`
    //     // Есть еще два атрибута: `pending` и `paused`, но они не всегда возвращают корректные значения
    //     switch (className) {
    //         case 'speak':
    //             if (!speechSynthesis.speaking) {
    //                 convertTextToSpeech()
    //             }
    //             break
    //         case 'cancel':
    //             return speechSynthesis.cancel()
    //         case 'pause':
    //             return speechSynthesis.pause()
    //         case 'resume':
    //             return speechSynthesis.resume()
    //         default:
    //             return
    //     }
    // })
}