import React, {useState} from 'react'

export default function SearchBar(props) {
// input data 
const [text, setText] = useState('')

const onTermSubmit =  (e) => {
    e.preventDefault()
    props.search(text)
}


  return (
      <form onSubmit={(e) => onTermSubmit(e)}>
          <input
              placeholder="Search"
              className="placeholder-black text-black"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
          />
          {/* Found: {videos.length} */}
      </form>
  )
}
