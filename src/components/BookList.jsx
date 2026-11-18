import {BooksCard}  from './BookCard.jsx'

export const BookList = ({books,genre}) => {
      const   filteredBooks =books.filter(book => book.genre === genre)
    return (
        <ul>
            {filteredBooks.map((book) => (
                <li key={book.id}>
                    <BooksCard book={book}  />
                </li>
            ))}
        </ul>
    )
}
