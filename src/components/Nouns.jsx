import React from 'react'
import data from '../data/words.json'

function Nouns() {
  return (
    <>
        {
            data.nouns.map((word, index) => (
                <>
                  {word === '' ? null : <p key={index} className='word'>{word}</p>}
                </>
            )) 
        }
    </>
  )
}

export default Nouns