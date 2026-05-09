
// // import { useEffect, useState } from "react";
// // import QuestionCard from "./QuestionCard";
// // import Result from "./Result";

// // const Quiz = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [current, setCurrent] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [loading, setLoading] = useState(true);
// //   const [showResult, setShowResult] = useState(false);

// //   useEffect(() => {
// //     fetch("http://localhost:4500/api/quiz?limit=5")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data);
// //         const formatted = data.map((q) => ({
// //           question: q.question,
// //           options: [...q.incorrectAnswers, q.correctAnswer].sort(
// //             () => Math.random() - 0.5
// //           ),
// //           answer: q.correctAnswer,
// //         }));

// //         setQuestions(formatted);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Error:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   const handleAnswer = (option, className="w-full bg-gray-200 rounded-full h-2 mb-6") => {
// //     if (option === questions[current].answer) {
// //       setScore(score + 1);
// //       console.log("Correct answer!");
// //     }

// //     if (current + 1 < questions.length) {
// //       setCurrent(current + 1);
// //     } else {
// //       setShowResult(true);
// //     }
// //   };

// //   const restartQuiz = () => {
// //     setCurrent(0);
// //     setScore(0);
// //     setShowResult(false);
// //     setLoading(true);

// //     // reload questions again
// //     fetch("http://localhost:4500/api/quiz?limit=5")
// //       .then((res) => res.json())
// //       .then((data) => {
        
// //         const formatted = data.map((q) => ({
// //           question: q.question,
// //           options: [...q.incorrectAnswers, q.correctAnswer].sort(
// //             () => Math.random() - 0.5
// //           ),
// //           answer: q.correctAnswer,
// //         }));
        
// //         setQuestions(formatted);
// //         setLoading(false);
// //       });
// //   };

// //   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// //   return (
// //     <div style={styles.container}>
// //       {showResult ? (
// //         <Result score={score} total={questions.length} onRestart={restartQuiz} />
// //       ) : (
// //         <QuestionCard
// //           data={questions[current]}
// //           index={current + 1}
// //           total={questions.length}
// //           onAnswer={handleAnswer}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: "500px",
// //     margin: "50px auto",
// //     padding: "20px",
// //     border: "1px solid #ddd",
// //     borderRadius: "10px",
// //     textAlign: "center",
// //   },
// // };

// // export default Quiz;




// import React from 'react';
// import QuestionCard from './QuestionCard';
// import Result from './Result';
// import ProgressBar from './ProgressBar';
// import { useQuiz } from '../hooks/useQuiz';

// const Quiz = () => {
//     const { 
//         questions, currentIndex, score, 
//         showResult, loading, handleAnswer, restartQuiz 
//     } = useQuiz();

//     if (loading) {
//         return (
//             <div>
//                 <div>Loading Quiz...</div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <div>
//                 {showResult ? (
//                     <Result score={score} total={questions.length} onRestart={restartQuiz} />
//                 ) : (
//                     <>
//                         <ProgressBar current={currentIndex + 1} total={questions.length} />
//                         <QuestionCard 
//                             data={questions[currentIndex]} 
//                             index={currentIndex + 1}
//                             total={questions.length}
//                             choice={handleAnswer} 
//                         />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Quiz;




import React from 'react';
import QuestionCard from './QuestionCard';
import Result from './Result';
import ProgressBar from './ProgressBar';
import { useQuiz } from '../hooks/useQuiz';

const Quiz = () => {
    const { 
        questions, currentIndex, score, 
        showResult, loading, handleAnswer, restartQuiz 
    } = useQuiz();

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
                        <ProgressBar current={currentIndex + 1} total={questions.length} />
                        <QuestionCard 
                            data={questions[currentIndex]} 
                            index={currentIndex + 1}
                            total={questions.length}
                            choice={handleAnswer} 
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;