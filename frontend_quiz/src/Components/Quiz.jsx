// 


import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import Result from './Result';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://the-trivia-api.com/v2/questions?limit=5")
            .then(response => response.json())
            .then(data => {
                // Formatting the API data to be simple for our components
                const formatted = data.map(q => ({
                    question: q.question.text, 
                    options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
                    answer: q.correctAnswer
                }));
                setQuestions(formatted);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
                setLoading(false);
            });
    }, []);

    const handleAnswer = (selectedOption) => {
        // Compare the text of the clicked button to the correct answer string
        if (selectedOption === questions[currentIndex].answer) {
            setScore(prev => prev + 1);
        }

        const nextQuestion = currentIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentIndex(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        window.location.reload(); // Simplest way to reset everything
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-100">
                <div className="text-xl font-bold text-blue-600 animate-pulse">Loading Quiz...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {showResult ? (
                    <Result score={score} total={questions.length} onRestart={restartQuiz} />
                ) : (
                    <>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                            <div 
                                className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                        <QuestionCard 
                            data={questions[currentIndex]} 
                            index={currentIndex + 1}
                            total={questions.length}
                            onAnswer={handleAnswer} 
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;