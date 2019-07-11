import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Landing = () => (
   <section className="landing" className="bg-dark text-white" >
       <h1 className="jumbotron text-center">Shop like never before!</h1>

       <section className="selling-points" className="row">
           <div className="point" className="col-sm-4">
               <h2 className="point-title">Create collaborative grocery lists</h2>
               <p className="point-description">Add people to your grocery list. Divide and conquer the list together!</p>
           </div>
           <div className="point" className="col-sm-4">
               <h2 className="point-title">Update lists in real-time</h2>
               <p className="point-description">All users can update a list for everyone to see.</p>
           </div>
           <div className="point" className="col-sm-4">
               <h2 className="point-title">Mobile enabled</h2>
               <p className="point-description">Check your lists on multiple devices.</p>
           </div>
       </section>
   </section>
);

export default Landing;