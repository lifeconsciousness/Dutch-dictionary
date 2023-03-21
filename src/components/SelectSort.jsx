import React from 'react'
import { useState, useEffect } from 'react'

function SelectSort({handleFunc}) {
  const [selectClassName, setSelectClassName] = useState('')

  useEffect(()=>{
      const handleScroll = () => {
        setSelectClassName('')
      }
    document.addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sortWrapper">
        <select name="sortWords" id="sortWords" onChange={handleFunc} className={selectClassName} onClick={() => {
          selectClassName === '' ? setSelectClassName('select-open') : setSelectClassName('')
        }}>
          <option value="old-new">Oldest-newest</option>
          <option value="new-old">Newest-oldest</option>
          <option value="a-z">Alphabetical order</option>
          <option value="z-a">Alphabetical reversed</option>
        </select>
    </div>
  )
}

export default SelectSort