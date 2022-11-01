import React, { useReducer } from 'react'
import { useSearch, useSearchDispatch } from "../src/context/SearchContext";


export default function SearchBar(props) {
    const dispatch = useSearchDispatch()
    const searchState = useSearch()


    const onTermSubmit = (e) => {
        e.preventDefault()
        props.search(searchState.searchTerm)
    }


    return (
        <form onSubmit={(e) => onTermSubmit(e)}>
            <input
                placeholder="Search"
                className="text-black placeholder-black"
                type="text"
                value={searchState.searchTerm}
                onChange={(e) => dispatch({
                    type: 'searched',
                    field: e.target.name,
                    payload: e.target.value,
                })}
            />
        </form>
    )
}
