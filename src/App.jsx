import { useState, useEffect, useRef } from 'react'
import SecondSearch from './components/SecondSearch'

//make animation (rolling of big words) that plays with delay after you typed something (if something was typed earlier the animation does not occur and timer is resent)
//delete text in search button
//switching between the types of words and coloring the buttons
//Nederlands wordenboek switches between languages or displays word in Dutch and English
//maybe add some floating gradient to the word Nederlands (check codepen in email for the ideas or just google)

function App() {
  const searchRef = useRef(null)

  
  return (
    <div className="App">
      <SecondSearch offsetTop={searchRef.current}/>

      <div className="title-and-search">
        <div className={`search-wrapper`} ref={searchRef}>
          <input className='search-field' type="text" placeholder='Zoeken...'/>
        </div>
        <h1 className='dictionary-title'>Nederlands woordenboek</h1>
      </div>

      <div className="choice-panel">
        <button className="all">All</button>
        <button className="nouns">Nouns</button>
        <button className="verbs">Verbs</button>
        <button className="adjectives">Adjectives</button>
        <button className="sentences">Sentences</button>
      </div>

      <div className="words">
        <p className='word'>Belangrijk - important</p>
        <p className='word'>Verschillende - different</p>
        <p className='word'>Zoeken - to search</p>


        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>
        <p className='word'>Zoeken - to search</p>

      </div>

    </div>
  )
}

export default App
