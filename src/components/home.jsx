import React, {Component} from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Books from "./books";
import {Route, Switch} from 'react-router-dom'
import "../componentStyles/SingleBook.css"
import books from '../json_book'
import "../componentStyles/Home.css";
import SingleBook from "./singleBook";

class Home extends Component {
  
  render() {
        return (
          <div className="page">
            <Sidebar />
  
        <div className="page-body">
          <Topbar />
          <div className="page-content">

            {/* Routes */}  
            <Switch>
              <Route path="/books" exact render={
                props => <Books {...props} books={books} />
              } />
                  
              <Route path="/books/:bookId" exact render={({match: {params: {bookId}}}) => {
                let book = books.filter(book => book.id === parseInt(bookId));
                book = book[0];
                return (
                  <SingleBook {...book} />
                )
              }} />
                  
                  
              {/* <Route path="/books/:bookId" render={
                props => <SingleBook {...props} />}
              /> */}
              
            </Switch>

          </div>
        </div>
      </div>
    );

  }
}

export default Home;
