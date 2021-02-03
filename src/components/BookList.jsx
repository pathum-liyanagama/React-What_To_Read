import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { books } = useContext(BookContext)
    return (
        books.map(book => (
            <BookDetail key={book.id} book={book} />
        ))
    );
}

export default BookList;