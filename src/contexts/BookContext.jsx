import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState(
        [{ title: "Book 1", author: "Author 1", id: uuid() },
        { title: "Book 2", author: "Author 2", id: uuid() },
        { title: "Book 3", author: "Author 3", id: uuid() },
        ]
    )

    const addBook = (title, author) => setBooks([...books, { title, author, id: uuid() }]);

    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;