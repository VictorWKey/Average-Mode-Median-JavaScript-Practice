//AVERAGE CODE

function numberToAverage(){
    let numbersAmount = document.getElementById("numbersAmount1").value;
    let html = "";

    for(var i = 0; i < numbersAmount; i++){
        html += "<label>Number " + (i+1) + "</label>" + "<input type = 'number' class = 'input-num' id = 'numberValueAverage" + i + "'>";
    }
    html += "<button type = 'button' class = 'button-calculate' class = 'main-button' onclick = 'averageCalculate("+numbersAmount+")' id = 'buttonToCalculateAverage'>Calculate</button> <p class = 'result' id = 'result1'></p>";

    document.getElementById("spaceToPutNumber1").innerHTML = html;
}

function averageCalculate(amount){

    const numsList = [];

    for(var i = 0; i < amount; i++){
         const inputValues = document.getElementById("numberValueAverage" + i).value;
         numsList.push(parseInt(inputValues));
    }

    const sumList = numsList.reduce( 
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    
    const averageResult = sumList / numsList.length;
    const result = document.getElementById("result1");

    result.innerText = "The average is: " + averageResult;
}

//MEDIAN CODE

function numberToMedian(){
    const numbersAmount = document.getElementById("numbersAmount2").value;
    let html = "";

    for(var i = 0; i < numbersAmount; i++){
        html += "<label>Number " + (i+1) + "</label>" + "<input type = 'number' class = 'input-num' id = 'numberValueMedian" + i + "'>";
    }
    html += "<button type = 'button' class = 'button-calculate' onclick = 'medianCalculate("+numbersAmount+")' id = 'buttonToCalculateMedian'>Calculate</button> <p class = 'result' id = 'result2'></p>";

    document.getElementById("spaceToPutNumber2").innerHTML = html;
}

function isPar(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function medianCalculate (amount){

    const listNums2 = [];

    for(var i = 0; i < amount; i++){
        const inputValues = document.getElementById("numberValueMedian" + i).value;
        listNums2.push(parseInt(inputValues));
   }

    listNums2.sort((a, b) => a - b);

    const halfList = parseInt(listNums2.length / 2);

    let median;

    if(isPar(listNums2.length)){
         midPosition1 = listNums2[halfList];
         midPosition2 = listNums2[halfList - 1];
         averagePositions = (midPosition1 + midPosition2) / 2;
         median = averagePositions;
    } else {
         median = listNums2[halfList];
    }

    const result = document.getElementById("result2");
    result.innerText = "The median is: " + median;
}

//MODE CODE

function numberToMode(){
    const numbersAmount = document.getElementById("numbersAmount3").value;
    let html = "";

    for(var i = 0; i < numbersAmount; i++){
        html += "<label>Number " + (i+1) + "</label>" + "<input type = 'number' class = 'input-num' id = 'numberValueMode" + i + "'>";
    }
    html += "<button type = 'button' class = 'button-calculate' onclick = 'modeCalculate("+numbersAmount+")' id = 'buttonToCalculateMode'>Calculate</button> <p class = 'result' id = 'result3'></p>";

    document.getElementById("spaceToPutNumber3").innerHTML = html;
}

function modeCalculate(amount){

    const listNums3 = [];

    for(var i = 0; i < amount; i++){
        const inputValues = document.getElementById("numberValueMode" + i).value;
        listNums3.push(parseInt(inputValues));
   }

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

    const result = document.getElementById("result3");
    result.innerText = "The mode is: " + parseInt(mode[0]);   
}



//WEIGHTED AVERAGE

// const notes =[
//     {
//         course: "Maths",
//         note: 9,
//         credit: 4,
//     }, 
//     {
//         course: "Chemistry",
//         note: 7,
//         credit: 3,
//     }, 
//     {
//         course: "Statistics",
//         note: 10,
//         credit: 2,
//     }, 
//     {
//         course: "Literature",
//         note: 6,
//         credit: 2,
//     }
// ];

// const notesCreditsArray = notes.map(
//     function (multiplicationObject){
//         return multiplicationObject.note * multiplicationObject.credit;
//     }
// );

// const sumNotesCredits = notesCreditsArray.reduce(
//     function(accumulatedValue = 0, newElement){
//         return accumulatedValue + newElement;
//     }
// );

// const creditsArray = notes.map(
//     function(additionObject){
//         return additionObject.credit;
//     }
// );

// const sumCredits = creditsArray.reduce(
//     function(accumulatedValue = 0, newElement){
//         return accumulatedValue + newElement;
//     }
// );

// const weightedAverage = parseFloat((sumNotesCredits / sumCredits).toFixed(2));
