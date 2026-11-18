import {BooksCard}  from './BookCard.jsx'

export const BookList = ({books,genre}) => {
      const filteredBooks = genre? books.filter(book => book.genre === genre)
        : books;
    if (filteredBooks.length === 0) {
        return <p>В выбранной категории книги отсутствуют.</p>;
    }
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
