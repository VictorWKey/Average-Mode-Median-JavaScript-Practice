//AVERAGE CODE

function averageCalculate(listNums1){
    const sumList = listNums1.reduce( 
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    
    let averageResult = sumList / listNums1.length;
    return averageResult;
}

//MEDIAN CODE

function isPar(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function medianCalculate (listNums2){

    listNums2.sort((a, b) => a - b);

    let halfList = parseInt(listNums2.length / 2);

    let median;

    if(isPar(listNums2.length)){
         midPosition1 = listNums2[halfList];
         midPosition2 = listNums2[halfList - 1];
         averagePositions = averageCalculate([midPosition1, midPosition2]);
         median = averagePositions;
    } else {
         median = listNums2[halfList];
    }

    return median;
}

//MODE CODE
function modeCalculate(listNums3){
    const listNums3Count = {};

    listNums3.map(
        function (element){
            if(listNums3Count[element]){
                listNums3Count[element] += 1;
            } else {
                listNums3Count[element] = 1;
            }
        }
    )

    const listNums3NewArray = Object.entries(listNums3Count).sort((a, b) => a[1] - b[1]);

    const mode = listNums3NewArray[listNums3NewArray.length - 1];

    return mode[0];
}





