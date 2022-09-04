import React, { useReducer } from 'react'
import { useSearch, useSearchDispatch } from "../src/context/SearchContext";


export default function SearchBar(props) {
    const dispatch = useSearchDispatch()
    const searchState = useSearch()



    // const [text, setText] = useState('') //old

    const onTermSubmit = (e) => {
        e.preventDefault()
        props.search(searchState.searchTerm)
    }


    return (
        <form onSubmit={(e) => onTermSubmit(e)}>
            <input
                placeholder="Search"
                className="placeholder-black text-black"
                type="text"
                value={searchState.searchTerm}
                //   onChange={(e) => setText(e.target.value)} old 
                onChange={(e) => dispatch({
                    type: 'searched',
                    field: e.target.name,
                    payload: e.target.value,
                })}
            />
        </form>
    )
}
