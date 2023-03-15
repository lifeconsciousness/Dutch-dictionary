import React from 'react'
import { useState, useEffect} from 'react'

//redundant code for the redundant second searchbar that appears on scroll


function SecondSearch({offsetTop}) {
    const [searchFixed, setSearchFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > offsetTop.offsetTop){
            setSearchFixed(true)
            } else { setSearchFixed(false) }
        }
    
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    },[])
    
  return (
    <>
        <div className={`search-wrapper-hidden ${searchFixed ? 'search-fixed' : ''}`}>
          <input className='search-field' type="text" placeholder='Zoeken...'/>
        </div>
    </>
  )
}

export default SecondSearch