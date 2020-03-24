import React from 'react'
import { Link, Route } from 'react-router-dom'
import SingleBook from './singleBook'
import Book from './book'


const Books = ({ match: { url }, books }) => 
    <React.Fragment>
        {books.map(({ name, id, prize, image }) =>
            <Link key={id} to={`${url}/${id}`}>
                <Book id={id} image={image} name={name} prize={prize} />
            </Link>
        )}
    </React.Fragment>
export default Books
