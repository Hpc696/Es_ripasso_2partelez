const function2 = function printTabella(ships){
    let line = "";
    for (let i = 1; i < 10; i++) {
        line += ships[i - 1] + ' | ';
        if (i % 3 === 0) {
            console.log(line);
            console.log('____________')
            line = "";
        }

    }
};
module.exports = function2;