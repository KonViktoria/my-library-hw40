 import {BooksCard}  from './components/BookCard.jsx'

export const BookList = ({books}) => {

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <BooksCard book={book} />
                </li>
            ))}
        </ul>
    )
}
