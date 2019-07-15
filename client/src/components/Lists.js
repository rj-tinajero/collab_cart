import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

class Lists extends Component {
   constructor() {
      super();
      this.state = {
         lists: [],
         inputText: "new list"
      };

   }
   componentDidMount() { 
      axios.get('/api/lists')
      .then(response => response.data)
      .then((data) => { 
         if (data) {
            this.setState({ lists: data })
         }
         
      })
   }

   textChanged(evt) {
      evt.preventDefault();
      this.setState({ inputText: evt.target.value});
    }

    createList(evt) {
      evt.preventDefault();
      axios({
        url: `http://localhost:5000/lists`,
        method: 'post',
        data: `description=${this.state.inputText}`
      }).then(this.fetchEntries);
    }



   render() {
      return(
      <React.Fragment>
         <form>
            <input type="text" value={this.state.inputText} onChange={this.textChanged}/>
            <button id="button" onClick={this.createList}>Send</button>
         </form>
         
         <ul>
            {console.log(this.state, "render function")}
            { this.state.lists.map(list => <li>{list.title}</li>) }
         </ul>
      </React.Fragment>
         
      )
   } 
}

   




export default Lists;