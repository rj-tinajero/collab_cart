import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Landing from "./components/Landing";
import Lists from "./components/Lists";
import ListItems from "./components/ListItems";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

class App extends Component {
  componentDidMount() {
    
  }

  render() { 
    return (
      <div className="App">
        
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
           <div className="container">
             <a className="navbar-brand" href="/"><h5>CollabCart</h5></a>
             
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                  <Link className="nav-link" to='/'><h6>Home</h6></Link>
                 </li>
                 <li className="nav-item">
                  <Link className="nav-link" to='/lists'><h6>Lists</h6></Link>
                 </li>
                 <li className="nav-item">
                  <Link className="nav-link" to='/users/sign_in'><h6>Sign In</h6></Link>
                 </li>
                 <li className="nav-link">
                  
                 </li>
               </ul>
             </div>
      
          </nav>
        </header>

        <main className="body">
          <Route exact path="/" component={Landing} /> 
          <Route exact path="/lists" component={Lists} />
          <Route path="/lists/:id" component={ListItems} />
          <Route path="/users/sign_up" component={SignUp} />
          <Route path="/users/sign_in" component={SignIn} />
        </main>
      
      </div>
    );
  }
}

export default App;
