import React from 'react';

const QuestionCard = ({ data, onAnswer, index, total }) => {
  return (
    <div className="animate-fade-in">
      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
        Step {index} of {total}
      </span>
      <h2 className="text-2xl font-bold text-slate-800 mt-2 mb-8">
        {data.question}
      </h2>

      <div className="flex flex-col gap-3">
        {data.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
          >
            <span className="font-medium text-slate-700 group-hover:text-blue-700">
                {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;