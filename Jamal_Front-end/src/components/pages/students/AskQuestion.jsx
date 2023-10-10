import React, { useState } from 'react';
import StudentLayout from './StudentLayout';

function AskQuestion() {
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, for example, send the question to your API
  };

  return (
    <StudentLayout>
          <form onSubmit={handleSubmit}>
      <label>
        Question:
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <label>
        Subject:
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {/* Replace these options with the actual subjects */}
          <option value="math">Math</option>
          <option value="science">Science</option>
        </select>
      </label>
      <button type="submit">Ask</button>
    </form>
    </StudentLayout>
  );
}

export default AskQuestion;
