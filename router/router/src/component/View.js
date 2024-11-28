// import axios from 'axios'
// import React, { Component } from 'react'
// import './view.css'
// import {useParams} from 'react-router-dom'
// import axios from 'axios'
// export class View extends Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        list:[]
//     }
//   }
//   componentDidMount() {
//     axios
//       .get('http://localhost:3002/rec-api')
//       .then((res) => {
//         this.setState({ list: res.data });
//         console.log(list)
//       })
//       .catch();
//   }
//   render() {
//     return (
//       <div className="recipe-container">
//       <img
//         src="https://e1.pxfuel.com/desktop-wallpaper/612/466/desktop-wallpaper-burgers-high-quality-zinger-burger.jpg"
//         className="img12"
//       />
//       <div className="recipe-details">
//         <div className="recipe-name">
//           <h1>Recipe Name</h1>
//         </div>
//         <div className="ingredients">
//           <h2>
//             <b>Ingredients</b>
//           </h2>
//           <p>
//             1. Chocolate
//             <br />
//             2. Milk
//             <br />
//             3. Cream
//             <br />
//             4. Ingredients
//           </p>
//         </div>
//         <div className="procedure">
//           <h2>
//             <b>Procedure</b>
//           </h2>
//           <p>
//             aaaaaaa
//             <br />
//             aaaaaaaaaaa
//           </p>
//         </div>
//         <div className="diet-info">
//           <h2>
//             <b>Diet Info</b>
//           </h2>
//           <p>aaaaaaa</p>
//         </div>
//       </div>
//     </div>

  
//     )
//   }
// }
// export default View
import React, { useState, useEffect } from 'react';
import './view.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const params=useParams()
  const id=params.id;
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/rec-api/${id}`)
      .then((res) => {
        setList(res.data);
        console.log(list); // This won't work as expected; use 'list' directly instead of 'this.state.list'
      })
      .catch();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount in class components

  return (
    <div className="recipe-container">
      <img
        src={`http://localhost:3005/images/${list.image}`}
        className="img12"
        alt=''
      />
      <div className="recipe-details">
        <div className="recipe-name">
          <h1>{list.nameOfRecipe}</h1>
        </div>
        <div className="ingredients">
          <h2>
            <b>Ingredients</b>
          </h2>
          <p>{list.ingredients}
          </p>
        </div>
        <div className="procedure">
          <h2>
            <b>Procedure</b>
          </h2>
          <p>{list.procedure}
          </p>
        </div>
        <div className="diet-info">
          <h2>
            <b>Diet Info</b>
          </h2>
          <p>{list.dietInformation}</p>
          
        </div>
      </div>
    </div>
  );
}

export default View;
