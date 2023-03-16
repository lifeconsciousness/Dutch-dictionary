import React from 'react'
import data from '../data/words.json'

function Sentences() {
  return (
    <>
        {
            data.sentences.map((word, index) => (
              <>
                {word === '' ? null : <p key={index} className='word'>{word}</p>}
              </>
            )) 
        }
    </>
  )
}

export default Sentences