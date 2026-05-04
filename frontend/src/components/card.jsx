
import React, { useState, useMemo, useEffect } from 'react';
import '../index.css'

const Card = ({questionData, index, total, onNext, onPrev}) => {

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null); // Resets selected answer when question changes
  }, [questionData]);

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const options = useMemo(() => {
    return [
      ...questionData.incorrectAnswers,
      questionData.correctAnswer
    ].sort(() => Math.random() - 0.5);
  }, [questionData]);

  const handleClick = (opt) => {
    if (selected) return; //stops user from changing answer
    setSelected(opt);
  };

  const isCorrect = (opt) => {
    if (selected === null) return '';
    if (opt === questionData.correctAnswer) return 'correct';
    if (opt === selected) return 'incorrect';
    return '';
  };

  const handleNext = () => onNext();
  const handlePrev = () => onPrev();

  return (
    <div>
        <div className='container'>
          
          <div className='card'>
            <h4 className='status'>{index + 1}/{total}</h4>
            <div className='question'>
              <div className='timeleft'>00:30</div>
              <h6 className='category'>{decodeHTML(questionData.category)}</h6>
              <h2>{decodeHTML(questionData.question.text)}</h2>
            </div>

            <div className='options'>
              {options.map((opt, i) => (
                <button
                  key={i}
                  className={`option ${isCorrect(opt)}`}
                  onClick={() => handleClick(opt)}
                  disabled={selected !== null}
                >
                  {decodeHTML(opt)}
                </button>
              ))}
          </div>

            <h4 className='hint'>Hint: hints ekada vasthai.</h4>
            <div className="button-group">
              <button className="btn" onClick={handlePrev}>
                Previous
              </button>
              <button className="btn" onClick={handleNext}>
                Next
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card