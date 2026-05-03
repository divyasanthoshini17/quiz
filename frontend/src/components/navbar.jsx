import React from 'react'
import '../index.css'

const navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <h1 className='logo'>QuizMaster</h1>
            <div className='nav-links'>
                <a href='#'>Home</a>
                <a href='#'>Quizzes</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>
      </div>
    </div>
  )
}

export default navbar