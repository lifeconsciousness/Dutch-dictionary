import React from 'react'
import { useState, useEffect } from 'react'

function ChoicePanel(props) {
  const [section, setSection] = useState(0)

  useEffect(() => {
    props.onClick(section)
  }, [section])

  function handleClick(value){
    setSection(value)
  }


  return (
    <div className='choice-panel'>
        <button className={`${section === 0 ? 'button-active' : ''}`} onClick={() => handleClick(0)}>All</button>
        <button className={`${section === 1 ? 'button-active' : ''}`} onClick={() => handleClick(1)}>Nouns</button>
        <button className={`${section === 2 ? 'button-active' : ''}`} onClick={() => handleClick(2)}>Verbs</button>
        <button className={`${section === 3 ? 'button-active' : ''}`} onClick={() => handleClick(3)}>Adjectives</button>
        <button className={`${section === 4 ? 'button-active' : ''}`} onClick={() => handleClick(4)}>Sentences</button>
    </div>
  )
}

export default ChoicePanel