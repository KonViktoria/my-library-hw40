import {Card} from "./Card.jsx";

export const BooksCard=({book: {title, author, year, genre, copies}})=> {
    return <Card>
        <h2>title {title}</h2>
        <p>author {author}</p>
        <p>year {year}</p>
        <p>genre {genre}</p>
        <p>copies {copies}</p>

    </Card>
}
