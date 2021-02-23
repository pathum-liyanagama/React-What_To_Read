import { v1 as uuid } from 'uuid';

const BookReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_BOOK':
            const newBook = {
                title: action.payload.title,
                author: action.payload.author,
                id: uuid()
            }

            return [...state, newBook];

        case 'REMOVE_BOOK':
            return state.filter((book) => book.id !== action.payload.id);

        default:
            return state;
    }

}

export default BookReducer;