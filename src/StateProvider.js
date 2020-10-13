import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // push information into data layer and as well pull
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* this children is entire our app which is essentially like data layer and push and pull anything from data layer in the app */}
  </StateContext.Provider>
);
// this line of code will access to data layer for information
export const useStateValue = () => useContext(StateContext);

//
