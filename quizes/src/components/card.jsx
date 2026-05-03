import React from 'react'
import '../index.css'

const card = () => {
  return (
    <div>
        <div className='container'>
          
          <div className='card'>
            <h4 className='status'>4/10</h4>
            <div className='question'>
              <div className='timeleft'>00:30</div>
              <h6 className='category'>Geography</h6>
              <h2>What is the capital of France?</h2>
            </div>
            <div className='options'>
              <button className='option'>Berlin</button>
              <button className='option'>Madrid</button>
              <button className='option'>Paris</button>
              <button className='option'>Rome</button>
            </div>

            <h4 className='hint'>Hint: It's also known as the city of love.</h4>
            <button className='next'>Next</button>
            <button className='prev'>Prev</button>
          </div>
      </div>
    </div>
  )
}

export default card