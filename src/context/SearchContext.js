// get data from any source 
import { useReducer, createContext, useContext } from "react";


const SearchContext = createContext(null)
const SearchDispatchContext = createContext(null)

const initialState = {
    searchTerm: ''
}
export function SearchProvider({ children }) {
    const [searchState, dispatch] = useReducer(searchReducer, initialState)

    return (
        <SearchContext.Provider value={searchState}>
            <SearchDispatchContext.Provider value={dispatch}>
                {children}
            </SearchDispatchContext.Provider>
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}

export function useSearchDispatch() {
    return useContext(SearchDispatchContext)
}


const searchReducer = (searchState, action) => {
    switch (action.type) {
        case 'searched': {
            return {
                ...searchState,
                searchTerm: action.payload
            }
        }
        default:
            return searchState
    }
}
