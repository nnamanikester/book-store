import React from 'react'
import { Link } from 'react-router-dom'
import Book from './book'


const Books = ({ match: { url }, books }) => 
    <React.Fragment>
        {books.map((book) =>
            <Link key={book.id} to={`${url}/${book.id}`}>
                <Book {...book} />
            </Link>
        )}
    </React.Fragment>
export default Books
