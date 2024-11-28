// import React, { Component } from 'react';

// import axios from 'axios'
// class New extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        list:[]
//     }
//   }
  
//   componentDidMount() {
//     axios
//       .get('http://localhost:3005/rec-api')
//       .then((res) => {
//         this.setState({ list: res.data });
//       }).catch((error) => {
//         console.error('An error occurred while fetching data:', error);
//       });
//   }
 
//   render() {
//     return (
//       <div>
//         <h5>Most Liked Recipes</h5>
//         <section className="container">
//           <div className="row">
//         {this.state.list.map(x=>(<div className="item">
//               <img
//                 src="https://www.sandyathome.com/wp-content/uploads/2021/05/chicken-mandi.jpg"
//                 alt="Mandi"
//               />
//               <h3>{x.nameOfRecipe}</h3>
//               <p>
//                 {x.dietInformation}
//               </p>
//               <button id="mybutton11" >
//               <a href='/View'>View More</a>
//               <img src={`http://localhost:3005/images/View/${x.__id}`}/>
//               {id=params.id
//               axios.get('http://localhost:3005/rec-api')
//               .then(res=>{this.setState({
//                 nameOfRecipe:"",
//                ingredients:"",
//                 procedure:"",
//                  dietInformation:"",
//                  file:null,
//                  imagesList:[] 
//                 })
//               .catch(err=>{console.log(err)})}

//               </button>
//             </div>))}
            
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default New;
import axios from 'axios'
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './New.css'
export class New extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list:[]
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3005/rec-api')
      .then((res) => {
        this.setState({ list: res.data });
      })
      .catch();
  }
  render() {
    return (
      <div>
  
       New Products
       <h1> Our famous recipes</h1>
       <header>

          <h1>Recipe idea</h1>
          {/* <form>
            <input type="text" placeholder="search for recipe ideas" className="searchBox"/>
            <button type="Submit" className="searchBtn">
              Explore
            </button>
          </form> */}
       
        <section className="container">
          <div className="row">
            {this.state.list.map(x=>(<div className="item">
            <img
              src={`http://localhost:3005/images/${x.image}`} alt =''
              className="img"
            />
            <h3>{x.nameOfRecipe}</h3>
            <button id="mybutton11">
            <a href={`/beforegetit/view/${x._id}`}>view more</a>
            </button></div>))}
          </div>
        </section>
       </header>
    
      </div>
    )
  }
}
export default New