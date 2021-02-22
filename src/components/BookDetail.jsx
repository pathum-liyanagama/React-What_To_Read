import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetail = ({ book }) => {

    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', payload: { id: book.id } })}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
        </li>
    );
}

export default BookDetail;