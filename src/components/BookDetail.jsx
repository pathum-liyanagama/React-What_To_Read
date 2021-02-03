import React from 'react';

const BookDetail = ({ book }) => {
    return (
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
        </div>
    );
}

export default BookDetail;