import React, {useState, createContext} from 'react';

export const TodoContext = createContext();
//The List job is to hold info and pass it down to all other components (props.children)
export const List = props => {

// Import List into App.js with curly braces
// Wrap all components on App.js that I want to pass state down to inside ListProvider
// Take state from list and bring it into here
// If I want to use this information in list, I can import TodoContenxt in curlies
// To consume it, I can import {useContext} and set value to useContext(TodoContext) passing in context I want to use
    return(
        <TodoContext.Provider>{props.children}</TodoContext.Provider>
    )
}