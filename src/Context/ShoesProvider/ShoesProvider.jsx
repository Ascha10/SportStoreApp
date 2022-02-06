import React, { createContext, useEffect, useReducer } from 'react';
import { getShoes } from '../../Services/shoesService';

export const shoesContext = createContext();
const initialState = {
    loading: true,
    error: '',
    shoesApi: []
}

const option = {
    fetchSuccess : 'fetchSuccess',
    fetchError : 'fetchError'
}
const { fetchSuccess,fetchError} =  option; 

const reducer = (state, action) => {
    switch (action.type) {

        case fetchSuccess:
            return {
                loading: false,
                shoesApi: action.payload,
                error: ''
            }

        case fetchError:
            return {
                loading: false,
                shoesApi: [],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

export function ShoesProvider({children}) {
 const [state,dispatch] = useReducer(reducer,initialState);
    
    useEffect(() => {
         getShoes()
            .then(data => {dispatch({ type: fetchSuccess, payload: data })})
            .catch(error => {dispatch({ type: fetchError })})
    }, [])

  return(
     <shoesContext.Provider value={{state,dispatch}}>
         {children}
     </shoesContext.Provider>   
  );
}
