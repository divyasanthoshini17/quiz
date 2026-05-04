import { useEffect, useState } from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import './index.css'

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < questions.length - 1) {
    setIndex(index + 1);
  }
  };

  const handlePrev = () => {
      if (index > 0) {
    setIndex(index - 1);
  }
  };

  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions?limit=5")
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(err => console.error("Error fetching questions:", err));
  }, []);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Card questionData={questions[index]} index={index} total={questions.length} onNext={handleNext} onPrev={handlePrev} />
      <Sidebar questions={questions}/>
    </div>
  )
}

export default App