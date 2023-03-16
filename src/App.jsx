import { useState, useEffect, useRef } from 'react'
import data from './data/words.json'
import SecondSearch from './components/SecondSearch'
import ChoicePanel from './components/ChoicePanel'
import Words from './components/Words'


//make animation (rolling of big words) that plays with delay after you typed something (if something was typed earlier the animation does not occur and timer is resent)
//Nederlands wordenboek switches between languages or displays word in Dutch and English
//maybe add some floating gradient to the word Nederlands (check codepen in email for the ideas or just google)
//adding a new words via firebase or json file

function App() {
  const searchRef = useRef(null)
  const [section, setSection] = useState(0)
  const [search, setSearch] = useState('')

  const handleChoicePanel = (value) => {
    setSection(value)
  }

  
  return (
    <div className="App">
      {/* <SecondSearch offsetTop={searchRef.current}/> */}

      <div className="title-and-search">
        <div className={`search-wrapper`} ref={searchRef}>
          <input className='search-field' type="text" placeholder='Zoeken...' onInput={(e) => {setSearch(e.target.value)}}/>

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
          <Words wordsType={data.nouns} search={search}/>
          <Words wordsType={data.verbs} search={search}/>
          <Words wordsType={data.adjectives} search={search}/>
          <Words wordsType={data.sentences} search={search}/>
        </> : null }
        { section === 1 ? <Words wordsType={data.nouns} search={search} /> : null }
        { section === 2 ? <Words wordsType={data.verbs} search={search} /> : null }
        { section === 3 ? <Words wordsType={data.adjectives} search={search} /> : null }
        { section === 4 ? <Words wordsType={data.sentences} search={search} /> : null }

      </div>

    </div>
  )
}

export default App
