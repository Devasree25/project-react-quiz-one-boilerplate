import React from 'react'

function Quiz() {
  return (
    <div className='div1'>
        <div>
            <p id='title2'>Question</p>
            <p>1 of 15 </p>
            <p id='question'>Which is the only mammal that can jump ?</p>
            <div id='optionbox'>
                <div className='option1'>
                <div className='options'>
                <p>Dog</p>
                </div>
                <div className='options'>
                <p>Elephant</p>
                </div>
                </div>
                <div className='option1'> 
                <div className='options'>
                <p>Goat</p>
                </div>
                <div className='options'>
                <p>Lion</p>
                </div>
                </div>
                </div>
            <div id='buttons'>
              <button id='btn1'>Previous</button>
              <button id='btn2'>Next</button>
              <button id='btn3'>Quit</button>
            </div>
        </div>
    </div>
  )
}

export default Quiz