import React from 'react'
import data from '../data/words.json'
import Words from './Words'


function WordsContainer({section, search, sort}) {
  return (
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
  )
}

export default WordsContainer