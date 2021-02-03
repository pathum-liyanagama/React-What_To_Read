import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { books } = useContext(BookContext)
    return (
        <ul>
            {books.map(book => (
                <BookDetail key={book.id} book={book} />
            ))}
        </ul>

    );
}

export default BookList;