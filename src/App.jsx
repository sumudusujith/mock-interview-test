import { useState } from 'react';
import './App.css';

function App() {
  const data = [23, 12, 45, 66, 34, 98, 35, 52, 71, 18];


  function (){

  }

  return (
    <>
      <h2>Mock Interview 1 - Test</h2>
      <div className="card">
        <p>
          Input is <code>{data.toString()}</code>
        </p>
        <button>Generate Result</button>
        <p>
        The sum of the numbers of two slices of the array which derived from the given data array by filtering the odd numbers.
        </p>
        <p>
          Output is <code>{[12, 34].toString()}</code>
        </p>
      </div>
    </>
  );
}

export default App;
