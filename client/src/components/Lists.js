import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

// class Lists extends Component {
//    constructor(props) {
//       super(props);
//       this.state = { 
//          lists: null
//       };

//       this.textChanged = this.textChanged.bind(this);
//       this.fetchLists = this.fetchLists.bind(this);
//       this.newList = this.newList.bind(this);
//    }

//    render() {
//       return(
//          <React.Fragment>
//             <form>
//                <input type="text" value={this.state.inputText} onChange={this.textChanged} />
//                <button onClick={this.newList}>Add</button>
//             </form>

//             {this.state.lists && 
//                <ul>
//                   {this.state.lists.map(list => {
//                      return(
//                         <li key={list.id}>
//                            {list.title}
//                         </li>
//                      )
//                   })}
//                </ul>

//             }

//          </React.Fragment>
//       );
//    }
//    textChanged(e) {
//       e.preventDefault();
//       this.setState({ inputText: e.target.value });
//    }

//    fetchLists() {
//       axios.get("http://localhost:3001/api/lists").then(
//          lists => this.setState({ lists: Object.values(lists)[0], error: null })
//       ).catch( () => this.setState({lists: null, error: "error occured"}))
//    }

//    newList(e) {
//       e.preventDefault();
//       axios({
//          url: 'http://localhost:3001/lists',
//          method: 'post',
//          data: `description=${this.state.inputText}`
//       }).then(this.fetchLists);
//    }

// }

class Lists extends Component {
   constructor() {
      super();
      this.state = {
         lists: null
      };

   }
   componentDidMount() {
      fetch('http://localhost:3001/api/lists')
      .then(results => {
         return results.json();
      })
      .then(data => {
         let lists = data.results.map((list) => {
            return(
               <div key={list.id}>
                  <h1>{list.title}</h1>
               </div>
            )
         })
         this.setState({lists: lists});
         console.log("state", this.state.lists);
      })
   }

   render() {
      return(
         <div className="container">
            {this.state.lists}
         </div>
      )
   } 
}

   




export default Lists;