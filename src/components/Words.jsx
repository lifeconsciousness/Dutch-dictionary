import React from 'react'

function Words({ wordsType, search, sort }) {
  let sortedWords = wordsType;

  if (sort === 'new-old') {
    sortedWords = wordsType.slice().reverse()
  } else if (sort === 'a-z') {
    sortedWords = wordsType.slice().sort()
  } else if (sort === 'z-a') {
    sortedWords = wordsType.slice().sort().reverse()
  }

  const words = sortedWords
    .filter((item) => {
      return search === '' ? item : item.toLowerCase().includes(search.toLowerCase())
    })
    .map((word, index) => (
      <div key={index}>
        {word === '' ? null : <p className='word'>{word}</p>}
      </div>
    ));

  return <>{words}</>;
}

export default Words;
