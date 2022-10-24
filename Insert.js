const prompt=require('prompt-sync')();
const function1= function Insert(ships, howmanyship){
    let place=0;
    let choose= [];
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
};
module.exports = function1;