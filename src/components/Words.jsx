import React from 'react'

function Words({wordsType, search}) {
  return (
    <>
        {
            wordsType.
            filter((item) => {
              //filter returns only the elements that have value from search in them
              return search === '' ? item : item.toLowerCase().includes(search.toLowerCase());
            }).
            map((word, index) => (
                <div key={index}>
                  {word === '' ? null : <p className='word'>{word}</p>}
                </div>
            )) 
        }
    </>
  )
}

export default Words