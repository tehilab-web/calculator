let res = 0;
let num1 = 0, num2 = 0, index = 0;
let delimiterPattern = /([+*-/^])/g;

const input = document.getElementById('inputs');

input.addEventListener('keydown', function (event) {
    if (/[a-zA-Zא-ת]/.test(event.key)) {
        event.preventDefault();
    }
});

function display(val) {
    if (document.getElementById('result').value&&val!='-'&&val!='+'&&val!='*'&&val!='/'&&val!='^') {
        // debugger;
        document.getElementById("result").value = ""
        clrAll()
    }
    if (val=='-'||val=='+'||val=='*'||val=='/'||val=='^')
        document.getElementById("result").value = ""

    document.getElementById('inputs').value += val
}
function solve() {

    let inputText = document.getElementById('inputs').value;
    splitedText = inputText.split(delimiterPattern).filter(Boolean);
    if (splitedText[0] == '-') {
        splitedText.splice(0, 1)
        splitedText[0] = -parseFloat(splitedText[0])
    }
    if (splitedText[splitedText.length - 1] == '-' || splitedText[splitedText.length - 1] == '+' || splitedText[splitedText.length - 1] == '*' || splitedText[splitedText.length - 1] == '/' || splitedText[splitedText.length - 1] == '^') {
        document.getElementById("result").value = 'לא הוקש תרגיל נכון'
        return;
    }
    while (splitedText.includes('^')) {
        index = splitedText.indexOf('^')

        num1 = parseFloat(splitedText[index - 1])
        if (splitedText[index + 1] == '-') {
            splitedText.splice(index + 1, 1)
            num2 = -parseFloat(splitedText[index + 1])
        }
        else
            num2 = parseFloat(splitedText[index + 1])
        res = Math.pow(num1, num2)
        splitedText.splice(index - 1, 3, res);//מאיפה להסיר כמה להסיר ובמה להסיר
    }
    if (splitedText.length == 1) {
        document.getElementById("inputs").value = splitedText
        return;
    }
    while (splitedText.includes('*') || splitedText.includes('/')) {
        if (splitedText.indexOf('*') < splitedText.indexOf('/') && splitedText.indexOf('*') != -1 || !splitedText.includes('/')) {
            index = splitedText.indexOf('*')
            num1 = parseFloat(splitedText[index - 1])
            if (splitedText[index + 1] == '-') {
                splitedText.splice(index + 1, 1)
                num2 = -parseFloat(splitedText[index + 1])
            }
            else
                num2 = parseFloat(splitedText[index + 1])
            res = num1 * num2
            splitedText.splice(index - 1, 3, res);
        }//מאיפה להסיר כמה להסיר ובמה להסיר
        else
            if (splitedText.indexOf('*') > splitedText.indexOf('/') && splitedText.indexOf('/') != -1 || !splitedText.includes('*')) {
                index = splitedText.indexOf('/')
                num1 = parseFloat(splitedText[index - 1])
                if (splitedText[index + 1] == '-') {
                    splitedText.splice(index + 1, 1)
                    num2 = -parseFloat(splitedText[index + 1])
                }
                else
                    num2 = parseFloat(splitedText[index + 1])
                res = num1 / num2
                splitedText.splice(index - 1, 3, res);
            }
    }
    if (splitedText.length == 1) {
        document.getElementById("result").value = splitedText
        return;
    }
    while (splitedText.includes('+') || splitedText.includes('-')) {
        if (splitedText.indexOf('+') < splitedText.indexOf('-') && splitedText.indexOf('+') != -1 || !splitedText.includes('-')) {
            index = splitedText.indexOf('+')
            num1 = parseFloat(splitedText[index - 1])
            if (splitedText[index + 1] == '-') {
                splitedText.splice(index + 1, 1)
                num2 = -parseFloat(splitedText[index + 1])
            }
            else
                num2 = parseFloat(splitedText[index + 1])
            res = num1 + num2
            splitedText.splice(index - 1, 3, res);
        }//מאיפה להסיר כמה להסיר ובמה להסיר
        else
            if (splitedText.indexOf('+') > splitedText.indexOf('-') && splitedText.indexOf('-') != -1 || !splitedText.includes('+')) {
                index = splitedText.indexOf('-')
                num1 = parseFloat(splitedText[index - 1])
                if (splitedText[index + 1] == '-') {
                    splitedText.splice(index + 1, 1)
                    num2 = -parseFloat(splitedText[index + 1])
                }
                else
                    num2 = parseFloat(splitedText[index + 1])
                res = num1 - num2
                splitedText.splice(index - 1, 3, res);
            }
    }
    if (splitedText.length == 1) {
        document.getElementById("result").value = splitedText
        return;
    }
}
function clrAll() {
    document.getElementById("inputs").value = ""
}
function clr() {
    const del = document.getElementById("inputs");
    del.value = del.value.slice(0, -1)
}
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {

    if (event.keyCode === 13) {
        solve();
    }
    if (event.keyCode === 8) {
        clr();
    }
}
