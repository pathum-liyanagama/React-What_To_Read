import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { books, addBook } = useContext(BookContext)
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }

    return (
        <div>
            <ul>
                {books.map(book => (
                    <BookDetail key={book.id} book={book} />
                ))}
            </ul>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookList;