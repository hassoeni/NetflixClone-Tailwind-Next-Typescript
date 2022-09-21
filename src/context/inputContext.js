// get data from any source 
import { useReducer, createContext, useContext } from "react"; // import react hooks 


const InputContext = createContext(null) // define a context object
const InputDispatchContext = createContext(null)  // define a dispatch context object

const initialState = {
    email: '',
    password: ''
}

export function InputProvider({ children }) {
    const [inputState, dispatch] = useReducer(inputReducer, initialState)

    return (
        <InputContext.Provider value={inputState}>
            <InputDispatchContext.Provider value={dispatch}>
                {children}
            </InputDispatchContext.Provider>
        </InputContext.Provider>
    )
}

export function useInput() {
    return useContext(InputContext)
}

export function useInputDispatch() {
    return useContext(InputDispatchContext)
}


const inputReducer = (inputState, action) => {
    switch (action.type) {
        case 'changed': {
            return {
                ...inputState,
                email: action.payload,
                password: action.payload
            }
        }
        default:
            return inputState
    }
}
