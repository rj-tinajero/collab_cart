import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from "./components/Landing";
import Lists from "./components/Lists";
import ListItems from "./components/ListItems";

class App extends Component {
  render() { 
    return (
      <div className="App">
        
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
           <div className="container">
             <a className="navbar-brand" href="/">CollabCart</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navabr-collapse" id="navbarResponsive">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                   
                 </li>
               </ul>
             </div>
           </div>
            <Link to='/'>Home</Link>
            <Link to='/lists'>Lists</Link>
          </nav>
        </header>

        <main className="body">
          <Route exact path="/" component={Landing} /> 
          <Route exact path="/lists" component={Lists} />
          <Route path="/lists/:id" component={ListItems} />
        </main>

      </div>
    );
  }
}

export default App;
