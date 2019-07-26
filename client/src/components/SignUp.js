import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

class SignUp extends Component {
   constructor() {
      super();
      this.state = {
         username: '',
         email: '',
         password: ''
      }
   };

   onChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  
    onSubmit = (e) => { 
      e.preventDefault();
      const { username, email, password } = this.state;
  
      axios.post('/users/create', { username, email, password })
      .then((result) => {
         this.props.history.push("/users/sign_in");
      });
   }
   render() {
      const { username, email, password } = this.state;
      return (
        <div class="container">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <h2 className="form-signin-heading">Sign up for an account</h2>
            <label for="username" class="sr-only">Username</label>
            <input type="username" class="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
            <label for="email" class="sr-only">Email address</label>
            <input type="email" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
            <label for="password" class="sr-only">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          </form>
        </div>
      );
   }
}

export default SignUp;