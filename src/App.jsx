import {books} from './data/books.js'
import {Header}  from './components/Header.jsx'
import {Footer}  from './components/Footer.jsx'
import {BookList} from './components/BookList.jsx'
import { LibraryStats } from "./components/LibraryStats.jsx";
import "./App.css";

const genres = [
    "Художественная литература",
    "Учебная литература",
    "Детская литература",
    "Публицистика",
    "Научно-популярная литература",
];

function App() {
    return (
        <>
      <Header />

      <main>
        <LibraryStats books={books} />

        <h2>Все книги</h2>
        <BookList books={books} />

          {genres.map((genre) => (
              <section key={genre}>
            <h2>{genre}</h2>
            <BookList books={books} genre={genre} />
          </section>
          ))}
      </main>

      <Footer />
    </>
    );
}

export default App;
