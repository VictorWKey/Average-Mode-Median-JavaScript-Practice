//AVERAGE CODE

function averageCalculate(){
    const averageInput = document.getElementById("averageInput");
    const nums = averageInput.value;

    

    var listNums1 = [Number(nums)];
    console.log(listNums1);


    const sumList = listNums1.reduce( 
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    
    let averageResult = sumList / listNums1.length;
    console.log(averageResult);
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

//WEIGHTED AVERAGE

const notes =[
    {
        course: "Maths",
        note: 9,
        credit: 4,
    }, 
    {
        course: "Chemistry",
        note: 7,
        credit: 3,
    }, 
    {
        course: "Statistics",
        note: 10,
        credit: 2,
    }, 
    {
        course: "Literature",
        note: 6,
        credit: 2,
    }
];

const notesCreditsArray = notes.map(
    function (multiplicationObject){
        return multiplicationObject.note * multiplicationObject.credit;
    }
);

const sumNotesCredits = notesCreditsArray.reduce(
    function(accumulatedValue = 0, newElement){
        return accumulatedValue + newElement;
    }
);

const creditsArray = notes.map(
    function(additionObject){
        return additionObject.credit;
    }
);

const sumCredits = creditsArray.reduce(
    function(accumulatedValue = 0, newElement){
        return accumulatedValue + newElement;
    }
);

const weightedAverage = parseFloat((sumNotesCredits / sumCredits).toFixed(2));
