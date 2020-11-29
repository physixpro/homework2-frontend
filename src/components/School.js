import React, {useState, useEffect} from 'react';
import axios from 'axios'

function School () {
    

    useEffect( () => {
        const fetchTestResults = async () => {
            const res = await axios.get('http://localhost:3001/')
            const testResults = res.data;
            setTestResults(testResults);
            console.log(res);
        };
        // fetchTestResults();
    },[])

    const [ testResults,setTestResults] = useState([])

    return(
        <div>
            <h1>University Test Results</h1>
           <h2>Exam Results</h2> 
           
           <button onclick={() => setTestResults} >View Results</button>

           {testResults.map(testResult => (
                <ul>
                    <li>Name:{testResult.student}</li>
            <li>Graduating:{testResult.graduating}</li>
            <li>Result:{testResult.test_results}</li>
                </ul>
            ))
              
            }
        </div>
    )
}

export default School;