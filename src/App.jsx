import {books} from './data/books.js
 import {Header}  from './components/Header.jsx'
import {Footer}  from './components/Footer.jsx'
<import {BookList}   from './components/BookList.jsx'
import './App.css'
import './App.css'

function App() {


  return (
    <>
     <Header />
      <div><BookList books={books} /></div>
      <Footer />
    </>
  )
}

export default App
