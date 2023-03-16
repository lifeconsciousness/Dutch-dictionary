import { useState, useEffect, useRef } from 'react'
import data from './data/words.json'
import SecondSearch from './components/SecondSearch'
import ChoicePanel from './components/ChoicePanel'
import Nouns from './components/Nouns'
import Verbs from './components/Verbs'
import Adjectives from './components/Adjectives'
import Sentences from './components/Sentences'

//make animation (rolling of big words) that plays with delay after you typed something (if something was typed earlier the animation does not occur and timer is resent)
//delete text in search button
//switching between the types of words and coloring the buttons
//Nederlands wordenboek switches between languages or displays word in Dutch and English
//maybe add some floating gradient to the word Nederlands (check codepen in email for the ideas or just google)
//adding a new words via firebase or json file

function App() {
  const searchRef = useRef(null)
  const [section, setSection] = useState(0)

  const handleInput = (e) => {
    const value = e.target.value
  }

  const handleChoicePanel = (value) => {
    setSection(value)
  }

  
  return (
    <div className="App">
      {/* <SecondSearch offsetTop={searchRef.current}/> */}

      <div className="title-and-search">
        <div className={`search-wrapper`} ref={searchRef}>
          <input className='search-field' type="text" placeholder='Zoeken...' onInput={handleInput}/>

          <div className="clear-input" onClick={() => {
            const search = document.querySelector('.search-field')
            search.value = ''
          }}>x</div>
        </div>

        <h1 className='dictionary-title'>Nederlands woordenboek</h1>
      </div>

      <ChoicePanel onClick={handleChoicePanel}/>
      
      



      <div className="words">
        
      { section === 0 ? <>
        <Nouns />
        <Verbs />
        <Adjectives />
        <Sentences />
      </> : null }
      { section === 1 ? <Nouns /> : null }
      { section === 2 ? <Verbs /> : null }
      { section === 3 ? <Adjectives /> : null }
      { section === 4 ? <Sentences /> : null }

       

      </div>

    </div>
  )
}

export default App
