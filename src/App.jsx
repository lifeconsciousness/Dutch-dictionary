import { useState, useEffect, useRef } from 'react'
import data from './data/words.json'
import SecondSearch from './components/SecondSearch'
import CursorCircle from './components/CursorCircle'
import ChoicePanel from './components/ChoicePanel'
import Words from './components/Words'


//make animation (rolling of big words) that plays with delay after you typed something (if something was typed earlier the animation does not occur and timer is resent)
//Nederlands wordenboek switches between languages or displays word in Dutch and English
//maybe add some floating gradient to the word Nederlands (check codepen in email for the ideas or just google) oor following cursor light
//add sections to the categories (e.g. nouns: food, daily life)

//adding a new words via firebase or json file

function App() {
  const searchRef = useRef(null)
  const [section, setSection] = useState(0)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  const handleChoicePanel = (value) => {
    setSection(value)
  }
  const handleOptions = (e) => {
    setSort(e.target.value)
  }
  const [selectClassName, setSelectClassName] = useState('')
  
  return (
    <div className="App">
      {/* <SecondSearch offsetTop={searchRef.current}/> */}
      {/* <CursorCircle /> */}

      <div className="title-and-search">
        <div className={`search-wrapper`} ref={searchRef}>

          <input className='search-field' type='text' placeholder='Zoeken...' onInput={(e) => {setSearch(e.target.value)}}/>
          <div className="clear-input" onClick={() => {
            const search = document.querySelector('.search-field')
            search.value = ''
            setSearch('')
          }}>x</div>

        </div>
        <div className="title-text">
          <h1 className='dictionary-title'><span>Nederlands</span><br></br><span>Woordenboek</span></h1>
        </div>
      </div>

      <ChoicePanel onClick={handleChoicePanel}/>

      <div className="sortWrapper">
        <select name="sortWords" id="sortWords" onChange={handleOptions} className={selectClassName} onClick={() => {
          selectClassName === '' ? setSelectClassName('select-open') : setSelectClassName('')
        }}>
          <option value="old-new">Oldest-newest</option>
          <option value="new-old">Newest-oldest</option>
          <option value="a-z">Alphabetical order</option>
          <option value="z-a">Alphabetical reversed</option>
        </select>
      </div>
      
      <div className="words">
        
        { section === 0 ? <>
          <Words wordsType={data.sentences} search={search} sort={sort}/>
          <Words wordsType={data.nouns} search={search} sort={sort}/>
          <Words wordsType={data.adjectives} search={search} sort={sort}/>
          <Words wordsType={data.verbs} search={search} sort={sort}/>
          <Words wordsType={data.prepositions} search={search} sort={sort}/>
          <Words wordsType={data.adverbs} search={search} sort={sort}/>
        </> : null }
        { section === 1 ? <Words wordsType={data.nouns} search={search} sort={sort} /> : null }
        { section === 2 ? <Words wordsType={data.verbs} search={search} sort={sort} /> : null }
        { section === 3 ? <Words wordsType={data.adjectives} search={search} sort={sort} /> : null }
        { section === 4 ? <Words wordsType={data.adverbs} search={search} sort={sort} /> : null }
        { section === 5 ? <Words wordsType={data.prepositions} search={search} sort={sort} /> : null }
        { section === 6 ? <Words wordsType={data.sentences} search={search} sort={sort} /> : null }

      </div>

    </div>
  )
}

export default App
