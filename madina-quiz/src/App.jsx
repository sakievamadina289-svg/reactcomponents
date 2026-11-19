import React, { useState } from 'react';
import Frame from './components/Frame';
import QuizCard from './components/QuizCard';
import questions from './questions';

export default function App() {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const question = questions[round];

  function restart() {
    setScore(0);
    setRound(0);
  }

  return <Frame>
    {question ? <>
      <p className="topic">Question {round + 1} of {questions.length} · {question.topic}</p>
      <QuizCard key={question.topic} question={question} last={round === questions.length - 1}
        onAnswer={correct => { if (correct) setScore(value => value + 1); }}
        onNext={() => setRound(value => value + 1)} />
    </> : <section><h2>Your result</h2><p>You answered {score} of {questions.length} questions correctly.</p>
      <button onClick={restart}>Try again</button></section>}
  </Frame>;
}
