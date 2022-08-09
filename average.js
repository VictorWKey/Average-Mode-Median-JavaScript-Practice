"use strict";

//EVENT LISTENERS
document.getElementById("average-button").addEventListener("click", ()=>{
   averageCalculate(transformToArray("averageNumbers"));  
})

document.getElementById("median-button").addEventListener("click", ()=>{
    medianCalculate(transformToArray("medianNumbers"));  
 })

 document.getElementById("mode-button").addEventListener("click", ()=>{
    modeCalculate(transformToArray("modeNumbers"));  
 })

 //TRANSFORM INPUT ON ARRAY NUMBERS
 const transformToArray = inputID=>{
    const inputNumbers = document.getElementById(`${inputID}`);
    const stringNumbers = inputNumbers.value.toString().split(",");
    const numbers = stringNumbers.map(element=>{
     return Number(element);
    })
    return numbers;
}

//CREATE RESULT REPRESENTATION
const result = (resultID, result)=>{
    const divResultContainer = document.getElementById(`${resultID}`);
    const fragment = document.createDocumentFragment();
    const divResult = document.createElement("DIV")
    divResult.innerText = result;
    fragment.appendChild(divResult);
    divResultContainer.appendChild(fragment);
}

//AVERAGE CALCULATE CODE
const averageCalculate = array=>{
    const sumList = array.reduce( 
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    )
    const averageResult = sumList / array.length;
    result("averageResult", averageResult);
}

//MEDIAN CALCULATE CODE
const isPar = num=>{
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const medianCalculate = array=>{
    array.sort((a, b) => a - b);
    const halfList = parseInt(array.length / 2);
    let median;
    if(isPar(array.length)){
         midPosition1 = array[halfList];
         midPosition2 = array[halfList - 1];
         averagePositions = (midPosition1 + midPosition2) / 2;
         median = averagePositions;
    } else {
         median = array[halfList];
    }
    result("medianResult", median);
}

//MODE CALCULATE CODE
const modeCalculate = array=>{
    const arrayCount = {};
    array.map(
         element=>{
            if(arrayCount[element]){
                arrayCount[element] += 1;
            } else {
                arrayCount[element] = 1;
            }
        }
    )
    const newArray = Object.entries(arrayCount).sort((a, b) => a[1] - b[1]);   
    const mode = newArray[newArray.length - 1];
    result("modeResult", Number(mode[0])); 
}