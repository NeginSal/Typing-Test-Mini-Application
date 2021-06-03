const wording =["English texts for beginners to practice reading and comprehension online and for free", "Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.", "The texts below are designed to help you develop while giving you an instant evaluation of your progress."];
let startTime,endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log(this.innerText);
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
function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime =((endTime-startTime)/1000);
    console.log(totalTime);
    let str =playText.value;
}
function playGame(){
    let randomNum =Math.floor(Math.random()*wording.length);
    message.innerText= wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    console.log(startTime);
    button.innerText="Done";
    console.log(randomNum);

}