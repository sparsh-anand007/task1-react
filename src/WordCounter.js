import React, { useState } from 'react';

function WordCounter() {
  const [paragraph, setParagraph] = useState('');
  const countWords = () => {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  };

  return (
    <center>
      <div>
        <h1>Word Counter</h1>
        <textarea
          rows="5"
          cols="50"
          placeholder="Enter your paragraph here..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <p>Word Count: {countWords()}</p>
      </div>
      <h4>Created by Sparsh Anand</h4>
    </center>
    
  );
}

export default WordCounter;