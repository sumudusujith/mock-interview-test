import { useState } from 'react';
import './App.css';

function App() {

  const data = [23, 12, 45, 66, 34, 98, 35, 52, 71, 18];
  // let resultArray = []

  const [resultArray,setResultArray]= useState([]);

  const calculateSum = (array) => {
    const sum = array.reduce((total, value) => total + value, 0);

    return sum;


  }


  const generateResults = () => {

    const evenNum = data.filter(num => num % 2 === 0);
    console.log("check evenNum", evenNum);

    //sorting array
    const sortedArray = evenNum.sort();
    console.log("check sorted eveNum", sortedArray);

    // slicing array
    const slice1 = sortedArray.slice(0, sortedArray.length / 2);
    const slice2 = sortedArray.slice(sortedArray.length / 2 - 1, sortedArray.length - 1);
    console.log("check sorted slice1", slice1);
    console.log("check sorted slice2", slice2);

    //calculating the sum of the two slices
    const sum1 = calculateSum(slice1);
    const sum2 = calculateSum(slice2);
    // resultArray.push(sum1);
    // resultArray.push(sum2);
    console.log("resultarray",resultArray);

    console.log("check sum1 , sum2", sum1, sum2);

    const sumArray = [sum1, sum2];
    console.log("finay array output", sumArray);
    
    //  resultArray = [sum1, sum2];
    // resultArray = sumArray;
    // resultArray = [...sumArray];
    setResultArray(sumArray);
  }



  return (

    <>
      <h2>Mock Interview 1 - Test</h2>
      <div className="card">
        <p>
          Input is <code>{data.toString()}</code>
        </p>
        <button id="calEven" onClick={generateResults} >Generate Result </button>
        <p>
          The sum of the numbers of two slices of the array which derived from the given data array by filtering the odd numbers.
        </p>
        <p>
          Output is <code>{resultArray.toString()}</code>
        </p>
      </div>
    </>
  );
}

export default App;
