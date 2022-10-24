const prompt=require('prompt-sync')();
const function1 = require('./Insert');
const function2 = require('./Table');

let ships=[
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];
module.exports = ships;

const howmanyship = parseInt(prompt("Con quante navi vuoi giocare? "));
module.exports = howmanyship;
let remain = howmanyship;

let life= 3;

function1(ships, howmanyship);

function Play(){
    for(let i=0; i<ships.length; i++){   
        while(life>0 /* && guess==false*/ && remain>0){
            let chooseboom=prompt("Scegli dove sbombardare! Casella n: ");
            if(ships[chooseboom]!='N'){
                life = life-1;
                console.log("Hai " + life + " vite");
            } else {
                remain= remain-1;
                ships[chooseboom]='X';
                //guess = true;
                console.log("Affondata!");
                console.log("Ti mancano "+remain+" navi da affondare");
            }
            if(remain==0){
                console.log("Hai vinto bastardo!");
            }
            if(life==0){
                console.log("GAME OVER");
            }
        }
            //console.log(ships[choose]);
    }    
}
Play();

function2(ships);
console.log("N = nave non affondata");
console.log("X = nave affondata");