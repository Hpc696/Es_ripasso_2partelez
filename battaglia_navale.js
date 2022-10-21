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
let guess= false;
//const howmanyship= parseInt(prompt("Quante navi vuoi piazzare "));
//let remain = howmanyship;
function Insert(){
    let choose=prompt("Scegli dove piazzare la nave, Casella n: ");
    for(let i=0; i<ships.length; i++){
        //for(q=1; q<=howmanyship; q++){
        //console.log("Scegli dove piazzare la nave numero "+q);    
        if (choose==i){
            ships[choose]= 'N';
            //console.log(ships[choose]);
        }    
    }
}
Insert();

function Play(){
    for(let i=0; i<ships.length; i++){
        //for(q=1; q<=howmanyship; q++){
        //console.log("Scegli dove piazzare la nave numero "+q);    
        while(life>0 && guess==false){
            let chooseboom=prompt("Scegli dove sbombardare! Casella n: ");
            if(chooseboom!=ships.indexOf('N')){
                life = life-1;
                console.log("Hai " + life + " vite");
            } else {
                guess = true;
                console.log("Colpito e affondato!")
            }
            if(life==0){
                console.log("GAME OVER")
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