import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

class Lists extends Component {
   constructor() {
      super();
      this.state = {
         lists: [],
         inputText: "enter new list"
      };
      
      this.createList = this.createList.bind(this);
      this.textChanged = this.textChanged.bind(this);
      this.fetchLists = this.fetchLists.bind(this);
   }
   componentDidMount() { 
      this.fetchLists();
   }

   fetchLists() {
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
        data: `title=${this.state.inputText}`
      }).then(this.fetchLists)
      .catch(err => console.log(err))
    }



   render() {
      function deleteList(id, cb) {
         return (evt) => {
           evt.preventDefault();
           axios.get(`http://localhost:5000/lists/${id}/delete`).then(cb);
         };
       }
       

      return(
      <div>
         <form>
            <input type="text" value={this.state.inputText} onChange={this.textChanged}/>
            <button id="button" onClick={this.createList}>Send</button>
         </form>
         
         <ul>
            { this.state.lists.map(list => 
            <li key={list.id}>
               <Link to={
               {pathname: `/lists/${list.id}`,
               state: { list: list }
               }}
            >
                  {list.title}
               </Link>
               <button onClick={deleteList(list.id, this.fetchLists)}>X</button>
            </li>) }
         </ul>
      </div>
         
      )
   } 
}

export default Lists;