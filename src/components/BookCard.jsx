import {Card} from "./Card.jsx";
import {AvailabilityBadge} from "./AvailabilityBadge.jsx";

export const BooksCard=({book: {title, author, year, genre, copies, }})=> {
    return <Card>
        <h2>title {title}</h2>
        <p>author {author}</p>
        <p>year {year}</p>
        <p>genre {genre}</p>
        <p>copies {copies}</p>
        <AvailabilityBadge  isCopies={copies>0}/>
        {year<2000 && <p>Кассическое издание</p>}

    </Card>
}
