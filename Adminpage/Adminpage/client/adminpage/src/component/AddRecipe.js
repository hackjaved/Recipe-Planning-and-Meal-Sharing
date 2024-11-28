import React, { Component } from 'react'
import axios from 'axios'
export class AddRecipe extends Component {
    constructor(props) {
      super(props)
      this.state = {
         nameOfRecipe:"",
         ingredients:"",
         procedure:"",
         dietInformation:"",
         file:null,
         imagesList:[] 
      }
    }
    addtodb=()=>{
        const {nameOfRecipe,ingredients,procedure,dietInformation,file}=this.state
        const formData= new FormData()
        formData.append('nameOfRecipe',nameOfRecipe)
        formData.append('ingredients',ingredients)
        formData.append('procedure',procedure)
        formData.append('dietInformation',dietInformation)
        formData.append('file',file)
       axios.post('http://localhost:3005/upload',formData)
       .then(res=>{console.log(res)})
       .catch(err=>{console.log(err)})  
    }

  render() {
    const {nameOfRecipe,ingredients,procedure,dietInformation,file}=this.state
    return (
      <div>
        <form className='form-add'>
          <label>Name Of Recipe</label>
          <input value={nameOfRecipe} onChange={(e)=>this.setState({nameOfRecipe:e.target.value})}></input><br/>
          <label>Ingredients</label>
          <input value={ingredients} onChange={(e)=>this.setState({ingredients:e.target.value})}></input><br/>
          <label>Procedure</label>
          <input value={procedure} onChange={(e)=>this.setState({procedure:e.target.value})}></input><br/>
          <label>Diet Information</label>
          <input value={dietInformation} onChange={(e)=>this.setState({dietInformation:e.target.value})}/><br></br>
          
        <label>Images</label><br></br>
        <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})}/><br></br>
        <div>
        {this.state.imagesList.map(x=>(
          <img src={`http://localhost:3005/images/${x.image}`}/>
        ))}
        </div>
        <button onClick={this.addtodb}>Add</button>
          </form>
      </div>
    )
  }
}

export default AddRecipe