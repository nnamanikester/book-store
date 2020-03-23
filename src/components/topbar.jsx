import React, {Component} from 'react'

class Topbar extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="topbar">
                    <div className="search-bar">
                    <input
                        className="search-box"
                        type="text"
                        placeholder="Search Book..."
                    />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Topbar;