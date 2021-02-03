import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetail = ({ book }) => {

    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={() => removeBook(book.id)}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
        </li>
    );
}

export default BookDetail;