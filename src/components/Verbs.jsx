import React from 'react'
import data from '../data/words.json'

function Verbs() {
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

export default Verbs