const prompt=require('prompt-sync')();

/* layout?
for(let layout=1; layout<=4; layout++){

    console.log('| _ | _ | _ | _ |' + '\n' ); 
} */

let ships=[
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];

let life= 3;
//let guess= false;
//const howmanyship= parseInt(prompt("Quante navi vuoi piazzare "));
let choose= [];
const howmanyship = parseInt(prompt("Con quante navi vuoi giocare? "));
let remain = howmanyship;

function Insert(){
    let place=0;
    for(n=1; n<=howmanyship; n++){
        choose[n]=prompt("Scegli dove piazzare la "+ n +" nave, Casella n: ");
        for(let i=0; i<ships.length; i++){
            //for(q=1; q<=howmanyship; q++){
            //console.log("Scegli dove piazzare la nave numero "+q);    
            if (choose[n]==i){
                place= choose[n];
                ships[place]= 'N';
            }    
        }
    }
}
Insert();

function Play(){
    for(let i=0; i<ships.length; i++){
        //for(q=1; q<=howmanyship; q++){
        //console.log("Scegli dove piazzare la nave numero "+q);    
        while(life>0 /* && guess==false*/ && remain>0){
            let chooseboom=prompt("Scegli dove sbombardare! Casella n: ");
            if(ships[chooseboom]!='N'){
                life = life-1;
                console.log("Hai " + life + " vite");
            } else {
                remain= remain-1;
                //guess = true;
                console.log("Affondata!");
                console.log("Ti mancano "+remain+" navi da affondare");
            }
            if(life==0){
                console.log("GAME OVER");
            }
        }
            //console.log(ships[choose]);
    }    
}
Play();

const printTabella = () => {
    let line = "";
    for (let i = 1; i < 10; i++) {
        line += ships[i - 1] + ' | ';

        if (i % 3 === 0) {
            console.log(line);
            console.log('____________')
            line = "";
        }

    }
}
printTabella();