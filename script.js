const wording =["English texts for beginners to practice reading and comprehension online and for free", "Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.", "The texts below are designed to help you develop while giving you an instant evaluation of your progress."];
let startTime,endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click",function(){
    if(this.innerText=="Start"){
        playText.disabled =false;
        playGame();
    }
    else if(this.innerText == "Done"){
        playText.disabled =true;
        button.innerText ="Start";
        endPlay();
        }
    })
    
//End play
function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime =((endTime-startTime)/1000);
    let str =playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMessage = "you typed at"+speed+"words per minute";
    finalMessage +=compareWords(message.innerText,str);
    message.innerHTML=finalMessage;
}

//wordCounter
function wordCounter(strWords){
    let response =strWords.split("").length;
    return response;
}

//compareWords
function compareWords(str1,str2){
    let words1 = str1.split("");
    let words2 = str2.split("");
    let cnt =0;
    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })
    return (cnt+" correct out of" +words1.length + "words ");
}

//playGame
function playGame(){
    let randomNum =Math.floor(Math.random()*wording.length);
    message.innerText= wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText="Done";
}