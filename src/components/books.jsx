import React from 'react'
import Book from './book'
import books from '../json_book'

function Books() {

    return (
        <React.Fragment>
            {
                books.map(book => <Book key={book.id} name={book.name} id={book.id} prize={book.prize} image={book.image} />)
            }
            
        </React.Fragment>
    )
}

export default Books
