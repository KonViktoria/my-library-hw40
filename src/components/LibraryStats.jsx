export const LibraryStats = ({ books }) => {
    const availableBooks = books.filter(book => book.copies > 0);

    return (
        <div>
            <h2>Статистика библиотеки</h2>
            <p>Всего книг {books.length}</p>
            <p>Доступно {availableBooks.length}</p>
        </div>
    );
};
