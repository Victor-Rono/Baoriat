import React,{createContext, useContext, useReducer} from "react";
 

//create data layer
export const StateContext = createContext();

//this provides data layer for our app
export const StateProvider = ({reducer, initialState, children})=>{
   return(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
   )
    
}

//pull info from data layer
export const useStateValue = () => useContext(StateContext);