import React from 'react';

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-3xl font-extrabold text-slate-800">Done!</h2>
      <p className="text-slate-500 mt-2 mb-6 font-medium">You finished the quiz.</p>
      
      <div className="bg-blue-50 rounded-2xl py-6 mb-8 border border-blue-100">
        <p className="text-5xl font-black text-blue-600">{score} / {total}</p>
        <p className="text-xs text-blue-400 font-bold uppercase mt-2 tracking-widest">Final Score</p>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all shadow-lg"
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;