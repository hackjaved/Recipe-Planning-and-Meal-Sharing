import React, { Component } from 'react';

import axios from 'axios'
class Best extends Component {
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
      }).catch((error) => {
        console.error('An error occurred while fetching data:', error);
      });
  }
  render() {
    return (
      <div>
        <h5>Most Liked Recipes</h5>
        <section className="container">
          <div className="row">
        {this.state.list.map(x=>(<div className="item">
              <img
                src={`http://localhost:3005/images/${x.image}`}
                alt=''
              />
              <h3>{x.nameOfRecipe}</h3>
              <p>
                {x.dietInformation}
              </p>
              <button id="mybutton11">View More</button>
            </div>))} 
            
           </div>
        </section>
      </div>
    );
  }
}

export default Best;