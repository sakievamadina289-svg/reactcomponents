import React, { useState } from 'react';

export default function QuizCard({ question, onAnswer, onNext, last }) {
  const [choice, setChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function check(event) {
    event.preventDefault();
    if (choice === null || submitted) return;
    setSubmitted(true);
    onAnswer(choice === question.answer);
  }

  return <section>
    <form onSubmit={check}>
      <fieldset disabled={submitted}>
        <legend>{question.prompt}</legend>
        {question.options.map((option, index) => (
          <div className="option" key={option}>
            <input type="radio" name="choice" id={'choice-' + index}
              checked={choice === index} onChange={() => setChoice(index)} />
            <label htmlFor={'choice-' + index}>{option}</label>
          </div>
        ))}
      </fieldset>
      {!submitted && <button disabled={choice === null}>Check answer</button>}
    </form>
    {submitted && <aside aria-live="polite">
      <strong>{choice === question.answer ? 'Correct!' : 'Correct answer: ' + question.options[question.answer]}</strong>
      <p>{question.note}</p>
      <button onClick={onNext}>{last ? 'See result' : 'Next question'}</button>
    </aside>}
  </section>;
}
