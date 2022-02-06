import React, { createContext, useEffect, useReducer } from 'react';
import { getShirts } from '../../Services/shirtsService';

export const shirtContext = createContext();

const initialState = {
	loading: true,
	error: '',
	shirtsApi: []
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
				shirtsApi: action.payload,
				error: ''
			}

		case fetchError:
			return {
				loading: false,
				shirtsApi: [],
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

export function ShirtsProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
         getShirts()
			.then(data => {dispatch({ type: fetchSuccess, payload: data })})
			.catch(error => {dispatch({ type: fetchError })})
	}, [])

  return(
    <shirtContext.Provider value={{state,dispatch}}>
      {children}
    </shirtContext.Provider> 
 
  );
}
