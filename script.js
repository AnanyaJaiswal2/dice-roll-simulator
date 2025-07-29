// button pe hm agr kch apply krna h tho phle usko js pe lana hoga
const buttonE1=document.getElementById("roll-button");

const diceE1=document.getElementById("dice");
const rollHistoryE1=document.getElementById("roll-history");
let historyList=[];
function rollDice(){
    
        const rollResult=Math.floor(Math.random()*6)+1;
        const diceFace=getDiceFace(rollResult);
        //face change krne ke lie show ho jo
        diceE1.innerHTML=diceFace;
        //update history list
        historyList.push(rollResult);
        updateRollHistory();
    }

function updateRollHistory(){
     rollHistoryE1.innerHTML="";
     for(let i=0;i<historyList.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll ${i+1}:<span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryE1.appendChild(listItem);
     }
}
function getDiceFace(rollResult){
    //using switch
    switch(rollResult){
        case 1:
            return "&#9856;";
            case 2:
            return "&#9857;";
            case 3:
            return "&#9858;";
            case 4:
            return "&#9859;";
            case 5:
            return "&#9860;";
            case 6:
            return "&#9861;";
            default:
                return "";
    }
}

//agr hme button click krke kch perform krna h tho
buttonE1.addEventListener("click",()=>{
    diceE1.classList.add("roll-animation");
     setTimeout(()=>{
        diceE1.classList.remove("roll-animation");
        rollDice()
        
     },1000);
});