import React, { createContext, useReducer } from 'react';
import { v1 as uuid } from 'uuid';
import BookReducer from '../reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(BookReducer, []);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;