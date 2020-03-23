import React, {Component} from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Books from "./books";
import SingleBook from './singleBook'
import {Route, Switch} from 'react-router-dom'
import "../componentStyles/Home.css";
import "../componentStyles/SingleBook.css"

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Sidebar />
  
        <div className="page-body">
          <Topbar />
  
          <div className="page-content">
            <Switch>
              <Route path="/" exact strict component={Books} />
              <Route path="/books/:id" exact strict component={SingleBook} />
            </Switch>

          </div>
        </div>
      </div>
    );

  }
}

export default Home;
