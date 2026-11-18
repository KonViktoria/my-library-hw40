import { Card } from "./Card.jsx";
import { AvailabilityBadge } from "./AvailabilityBadge.jsx";

export const BooksCard = ({
 book: { title, author, year, genre, copies }}) => {
    return (
        <Card>
      <h2>{title}</h2>
      <p>Автор {author}</p>
      <p>Год {year}</p>
      <p>Жанр {genre}</p>
      <p>Количество {copies}</p>

      <AvailabilityBadge isCopies={copies > 0} />

            {year < 2000 && <p>Классическое издание</p>}
    </Card>
    );
};
