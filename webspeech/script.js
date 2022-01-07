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
    ["пятьдесят", "п'ятдесят", "fifty"]
]


console.log(numbers)


function wordToNumber(word, numbers) {
    new_temp = ""
    p = parseFloat(word);
    console.log("numbers" + " " + numbers)
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
            case "відкрити":
                new_temp += " ( ";
                break;
            case "закрыть":
                new_temp += " ) ";
                break;
            case "закрити":
                new_temp += " ) ";
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
    for (i = 0; i < arr.length; i++) {
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
recognition.lang = "uk-UA";
//recognition.lang = "ru-RU";
//recognition.lang = "en-US";

let pn = document.createElement('input');

recognition.addEventListener('result', (e) => {

    console.log("1111111wadawdawdwd")
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
    /*if (e.result[0].isFinal) {
        pn = document.createElement('input');
    }*/
    console.log("22222wadawdawdwd")
    console.log(e);
    console.log(text);
    document.getElementById("test").value = text
})

/*recognition.addEventListener('end', () => {
    console.log(10)
    recognition.start();
})*/

function turn_on() {
    recognition.start();
}

function turn_off() {
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
    result = eval(second_temp);
    document.getElementById("test").value = second_temp;
    document.getElementById("result").innerHTML = result;
    convertTextToSpeech(result);
    new_storage = document.getElementById("storage")
    new_p = document.createElement("p");
    new_span_1 = document.createElement("span");
    new_span_1.setAttribute("class", "example")
    new_span_1.innerHTML = second_temp;
    new_span_2 = document.createElement("span");
    new_span_2.setAttribute("class", "result");
    new_span_2.innerHTML = result;
    document.getElementById("history").setAttribute("style", "display:none")
    new_p.appendChild(new_span_1);
    new_p.innerHTML += " = ";
    new_p.appendChild(new_span_2);
    new_storage.appendChild(new_p);
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
    initializeHandlers()
}


function initializeHandlers() {
    // Ниже перечислены почти все события, которые возникают при работе с рассматриваемым интерфейсом
    U.onstart = () => console.log('Started')
    U.onend = () => console.log('Finished')
    U.onerror = (err) => console.error(err)
    // Мне не удалось добиться возникновения этих событий
    U.onpause = () => console.log('Paused')
    U.onresume = () => console.log('Resumed')

    // Обработка изменения настроек
    wrapper.onchange = ({ target }) => {
        if (target.type !== 'range') return
        handleChange(target)
    }

    // Обработка нажатия кнопок
    buttons.addEventListener('click', ({ target: { className } }) => {
        // SpeechSynthesis предоставляет таким методы как `speak()`, `cancel()`, `pause()` и `resume()`
        // Вызов метода `speak()` требует предварительной подготовки
        // Кроме того, мы проверяем наличие текста в очереди на озвучивание с помощью атрибута `speaking`
        // Есть еще два атрибута: `pending` и `paused`, но они не всегда возвращают корректные значения
        switch (className) {
            case 'speak':
                if (!speechSynthesis.speaking) {
                    convertTextToSpeech()
                }
                break
            case 'cancel':
                return speechSynthesis.cancel()
            case 'pause':
                return speechSynthesis.pause()
            case 'resume':
                return speechSynthesis.resume()
            default:
                return
        }
    })
}

function handleChange(el) {
    el.nextElementSibling.textContent = el.value
}

function convertTextToSpeech(res) {
    // Получаем текст
    const trimmed = "Результат: " + res;
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













var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}