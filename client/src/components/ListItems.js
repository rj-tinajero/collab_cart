import React, { Component } from 'react';
import axios from "axios";

class ListItems extends Component {
   constructor(props) {
      super(props);
      this.state = {
         list: props.location.state.list,
         items: [],
         inputText: "enter new item"
      };

      this.fetchItems = this.fetchItems.bind(this);
      this.textChanged = this.textChanged.bind(this);
      this.createItem = this.createItem.bind(this);
   }

   componentDidMount() {
      this.fetchItems();
   }

   fetchItems() {
      axios.get(`/lists/${this.state.list.id}`)
      .then(response => response.data.items)
      .then((data) => { console.log(data, "yo data herew")
         if (data) {
            this.setState({ items: data })
         }
         
      })
      
   }

   textChanged(evt) {
      evt.preventDefault();
      this.setState({ inputText: evt.target.value});
    }

   createItem(evt) {
      evt.preventDefault();
      axios.post(`http://localhost:5000/lists/${this.state.list.id}/create`, {
         title: this.state.inputText,
         listId: this.state.list.id
      })
      .then(this.fetchItems)
      .catch(err => console.log(err))
   }

   render() {
      function deleteItem(id, cb) {
         return (evt) => {
           evt.preventDefault();
           axios.post(`http://localhost:5000/lists/${id}/delete`,{
              id: id
           }).then(cb);
         };
       }
       function tagItem(id, cb) {
         return (evt) => {
            evt.preventDefault();
            axios.post(`http://localhost:5000/lists/${id}/update`, {
               id: id,
               purchased: true
            }).then(cb);
         }
       }
       function unTagItem(id, cb) {
         return (evt) => {
            evt.preventDefault();
            axios.post(`http://localhost:5000/lists/${id}/update`, {
               id: id,
               purchased: null
            }).then(cb);
         }
       }
      
      return(
      <React.Fragment>
         <h2>{this.state.list.title}</h2>
         
         <form>
            <input type="text" value={this.state.inputText} onChange={this.textChanged}/>
            <button id="button" onClick={this.createItem}>Send</button>
         </form>

         <ul>
         { this.state.items.map(item => 
            <li key={item.id}>
               
                  {item.title}
              
               <button onClick={deleteItem(item.id, this.fetchItems)}>X</button>
               {item.purchased === null  &&
                  <button onClick={tagItem(item.id, this.fetchItems)}>Mark as Purchased</button>
               } 
               {item.purchased === true &&
                  <button onClick={unTagItem(item.id, this.fetchItems)}>Unmark as Purchased</button>
               }
            </li>) }
         </ul> 
      </React.Fragment>   
      )
   }
}

export default ListItems;