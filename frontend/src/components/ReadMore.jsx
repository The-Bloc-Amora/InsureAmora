import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [showAll, setShowAll] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <>
     
        {showAll
          ? text
          : `${text.slice(0, maxLength)}...`}
      
      <button onClick={() => setShowAll(!showAll)} className="text-gradient">
        {showAll ? 'Read Less' : 'Read More'}
      </button>
    </>
  );
}

export default ReadMore;
