import React from 'react'

function Words({wordsType, search}) {
  return (
    <>
        {
            wordsType.
            filter((item) => {
              return search.toLowerCase() === '' ? item : item.toLowerCase().includes(search) || search === '' ? item : item.includes(search)
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