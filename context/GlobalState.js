import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    users : []
}

//Create Context
 export const GlobalContext = createContext(initialState)

 //Provider Component
 export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions-----------------------------------------Start
    const removeUser = (id) =>{
        dispatch({
            type: "REMOVE_USER",
            payload: id
        })
    }

    const addUser = (user) =>{
        dispatch({
            type: "ADD_USER",
            payload: user
        })
    }

    const editUser = (user) =>{
        dispatch({
            type: "EDIT_USER",
            payload: user
        })
    }
    //Actions-----------------------------------------END

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
 }

