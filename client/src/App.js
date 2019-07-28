import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Landing from "./components/Landing";
import Lists from "./components/Lists";
import ListItems from "./components/ListItems";
import queryString from "query-string";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import withAuth from "./components/withAuth";

class App extends Component {

  componentWillMount() { 
    var query = queryString.parse(this.props.location.search);
    if (query.token) { console.log(window.localStorage, "will mount");
      window.localStorage.setItem("jwt", query.token);
      this.setState({session: true});
      console.log(window.localStorage, "will mount");
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    console.log(window.localStorage, "current reality");
  }

  logOut() {  
     if(window.localStorage) {
      window.localStorage.removeItem("jwt");
      console.log(window.localStorage, "logout happened?");
      this.props.history.push("/");
    }
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
                 

                 {window.localStorage.length === 0 &&
                    <li className="nav-item">
                    <a href="/auth/google" class="button">
                            <div>
                              <span class="svgIcon t-popup-svg">
                                <svg
                                  class="svgIcon-use"
                                  width="25"
                                  height="37"
                                  viewBox="0 0 25 25"
                                >
                                  <g fill="none" fill-rule="evenodd">
                                    <path
                                      d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                                      fill="#4285F4"
                                    />
                                    <path
                                      d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                                      fill="#34A853"
                                    />
                                    <path
                                      d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                                      fill="#FBBC05"
                                    />
                                    <path
                                      d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                                      fill="#EA4335"
                                    />
                                  </g>
                                </svg>
                         </span>
                       <span class="button-label">Sign in</span>
                     </div>
                  </a>
                 </li>
                }
                {window.localStorage.length === 1 &&
                  <li className="nav-item">
                    <Link className="nav-link" to='/lists'><h6>Lists</h6></Link>
                  </li>
                }
                 {window.localStorage.length === 1 &&
                  <li className="nav-item">
                    <a href="/logout" onClick={this.logOut}>Sign Out</a>
                  </li>
                }
                 
               </ul>
             </div>
      
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
