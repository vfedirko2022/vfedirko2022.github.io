numbers = [
    ["один","один", "one"],
    ["два","два", "two"],
    ["три","три", "three"],
    ["четыре","чотири", "four"],
    ["пять","п'ять", "five"],
    ["шесть","шість", "six"],
    ["сем","сім", "seven"],
    ["восем","вісім", "eight"],
    ["девять","дев'ять", "nine"],
    ["десять","десять", "ten"],
    ["одиннадцать","одинадцять", "eleven"],
    ["двенадцать","дванадцять", "twelve"],
    ["тринадцать","тринадцять", "thirteen"],
    ["четырнадцать","чотирнадцять", "fourteen"],
    ["пятьнадцать","п'ятнадцять", "fifteen"],
    ["шестнадцать","шістнадцять", "sixteen"],
    ["семнадцать","сімнадцять", "seventeen"],
    ["восемнадцать","вісмнадцять", "eighteen"],
    ["девятнадцать","дев'ятнадцять", "nineteen"],
    ["двадцать","двадцять", "twenty"],
    ["двадцать один","двадцять один", "twenty one"],
    ["двадцать два","двадцять два", "twenty two"],
    ["двадцать три","двадцять три", "twenty three"],
    ["двадцать четыре","двадцять чотири", "twenty four"],
    ["двадцать пять","двадцять п'ять", "twenty five"],
    ["двадцать шесть","двадцять шість", "twenty six"],
    ["двадцать сем","двадцять сім", "twenty seven"],
    ["двадцать восем","двадцять вісім", "twenty eight"],
    ["двадцать девять","двадцять дев'ять", "twenty nine"],
    ["тридцать","тридцять", "thirty"],
    ["тридцать один","тридцять один", "thirty one"],
    ["тридцать два","тридцять два", "thirty two"],
    ["тридцать три","тридцять три", "thirty three"],
    ["тридцать четыре","тридцять чотири", "thirty four"],
    ["тридцать пять","тридцять п'ять", "thirty five"],
    ["тридцать шесть","тридцять шість", "thirty six"],
    ["тридцать сем","тридцять сім", "thirty seven"],
    ["тридцать восем","тридцять вісім", "thirty eight"],
    ["тридцать девять","тридцять дев'ять", "thirty nine"],
    ["сорок","сорок", "fourty"],
    ["сорок один","сорок один", "fourty one"],
    ["сорок два","сорок два", "fourty two"],
    ["сорок три","сорок три", "fourty three"],
    ["сорок четыре","сорок чотири", "fourty four"],
    ["сорок пять","сорок п'ять", "fourty five"],
    ["сорок шесть","сорок шість", "fourty six"],
    ["сорок сем","сорок сім", "fourty seven"],
    ["сорок восем","сорок вісім", "fourty eight"],
    ["сорок девять","сорок дев'ять", "fourty nine"],
    ["пятьдесят","п'ятдесят", "fifty"]
]


console.log(numbers)


function wordToNumber(word, numbers) {
    new_temp = ""
    p = parseFloat(word);
    console.log("numbers" + " " + numbers)
    for (k = 0; k < numbers.length; k++) {
        for(y = 0; y < numbers[k].length; y++){
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
            for(r = 0; r < numbers[j].length; r++){ 
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
recognition.lang = "ru-RU";
//recognition.lang = "uk-UA";
//recognition.lang = "en-US";

let p = document.createElement('input');

recognition.addEventListener('result', (e) => {

    console.log("1111111wadawdawdwd")
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
    if (e.result[0].isFinal) {
        p = document.createElement('input');
    }
    console.log("22222wadawdawdwd")
    console.log(e);
})

recognition.addEventListener('end', () => {

    recognition.start();
})

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
}

recognition.start();




let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);