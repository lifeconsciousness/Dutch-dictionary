import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="title-and-search">
        <div className="search-wrapper">
          <input type="text" placeholder='Search' />
        </div>
        <h1 className='dictionary-title'>Nederlands woordenboek</h1>
      </div>

      <div className="choice-panel">
        <button className="all">All</button>
        <button className="words">Words</button>
        <button className="sentences">Sentences</button>
      </div>
    </div>
  )
}

export default App
