import React from 'react'

const Sidebar = ({ questions, currentQuestion }) => {

  const correctCount = questions.filter(q => q.status === "correct").length;
  const score = questions.length > 0 ? ((correctCount / questions.length) * 100).toFixed(1) : 0;

  return (
    <div className="sidebar">

      <div className="score-card">
        <h2>{score}%</h2>
        <p>You got {correctCount} answers correct</p>
      </div>

      <div className="question-list">
        {questions.map((q, index) => (
          <div
            key={index}
            className={`q-item 
              ${q.status} 
              ${index === currentQuestion ? "active" : ""}
            `}
          >
            Question {index + 1}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sidebar