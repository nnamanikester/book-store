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
            <Switch>
              <Route path="/books" exact render={
                props => <Books {...props} books={books} />
              }/>
              
                  <Route path="/books/:bookId" render={
                    props => <SingleBook {...props} books={books} />} />
              
              
            </Switch>

          </div>
        </div>
      </div>
    );

  }
}

export default Home;
