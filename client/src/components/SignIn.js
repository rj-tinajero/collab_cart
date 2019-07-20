import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/users/sign_in', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="username" class="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <label for="password" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
          <p>
            Dont have an account? <Link to="/users/sign_up"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Sign up here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;