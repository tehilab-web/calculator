let sigh=null;
function display(val){
    document.getElementById("result").value+=val
}
function showSigh(){
    let inputText= document.getElementById("result").value;
    sigh=inputText[inputText.length-1];   
}
function solve(){
    let inputText = document.getElementById("result").value;
    splitedText=inputText.split(sigh);
    let num1=parseFloat(splitedText[0]);
    let num2=parseFloat(splitedText[1]);
    switch (sigh) {
        case '+':
            document.getElementById("result").value=num1+num2
            break;
        case '-':
            document.getElementById("result").value=num1-num2
            break;
        case '/':
            document.getElementById("result").value=num1/num2
            break;
        case '*':
            document.getElementById("result").value=num1*num2
            break;
        default:
            document.getElementById("result").value=num1    
         } 

}
function clrAll(){
    document.getElementById("result").value=""
}
function clr(){
    const del=document.getElementById("result");
    del.value=del.value.slice(0,-1)   
}
var cal = document.getElementById("calcu"); 
        cal.onkeyup = function (event) { 
            if(event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/')
                showSigh();
            if (event.keyCode === 13) { 
                solve(); 
            } 
            if (event.keyCode === 8) { 
                clr(); 
            } 
        } 