import React from 'react'

function Result() {
  return (
    <div className='resultpage'>
            <h2 id='result'>Result</h2>
            <div className='div2'>
                <p id='show'>You need more practice!</p>
                <h1 id='score'>Your score is 20%</h1>
                <div className='scorechart'>
                  <p className='sentences'>Total number of questions </p>
                  <p className='sentences'>Number of attempted questions </p>
                  <p className='sentences'>Number of correct answer</p>
                  <p className='sentences'>Number of wrong answers </p>
                </div>
                <div>
                  <div className='scores'>
                      <p>15</p>
                      <p>9</p>
                      <p>3</p>
                      <p>6</p>
                  <div>
                    <button id='playButton2'>Play again</button>
                    <button className='btns'>Back to home</button>
                  </div>
                  </div>
                  </div>
                  
            </div>
    </div>
    

  )
}

export default Result