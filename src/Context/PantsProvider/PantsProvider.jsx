import React, { createContext, useEffect, useReducer } from 'react';
import { getPants } from '../../Services/pantsService';
export const pantsContext = createContext();

const initialState = {
	loading: true,
	error: '',
	pantsApi: []
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
				pantsApi: action.payload,
				error: ''
			}

		case fetchError:
			return {
				loading: false,
				pantsApi: [],
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}


export function PantsProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
         getPants()
			.then(data => {dispatch({ type: fetchSuccess, payload: data})})
			.catch(error => {dispatch({ type: fetchError })})

	}, [])

  return(
     <pantsContext.Provider value={{state,dispatch}}>
         {children}
     </pantsContext.Provider>   
  );
}
