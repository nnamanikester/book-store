import React from 'react'
import Book from './book'
import books from '../json_book'

function Books() {

    return (
        <React.Fragment>
            {
                books.map(book => <Book name={book.name} prize={book.prize} />)
            }
            
        </React.Fragment>
    )
}

export default Books
