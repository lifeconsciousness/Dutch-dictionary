import React from 'react'
import data from '../data/words.json'

function Adjectives() {
  return (
    <>
        {
            data.verbs.map((word, index) => (
              <>
                {word === '' ? null : <p key={index} className='word'>{word}</p>}
              </>
            )) 
        }
    </>
  )
}

export default Adjectives