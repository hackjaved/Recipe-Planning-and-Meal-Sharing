import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import axios from 'axios'
export class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
       poupbool:false,
       nameOfRecipe:"",
       ingredients:"",
       procedure:"",
       dietInformation:"",
       file:[],          
       id:""
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3005/rec-api')
    .then(res=>{
      this.setState({list:res.data})
    })
    .catch()
  }
  deleteRecipe=(id)=>{
    axios.delete(`http://localhost:3005/rec-api/${id}`)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    alert("Deleted")
    window.location.reload()
  }
  cancel=(e)=>{
      this.setState({poupbool:false})
      e.preventDefault()
  }
  showPopup=(id,nameOfRecipe,ingredients,procedure,dietInformation,file)=>{
    this.setState({
      poupbool:true,
      nameOfRecipe:nameOfRecipe,
      ingredients:ingredients,
      procedure:procedure,
      dietInformation:dietInformation,
      file:file,
      id:id
    })
  }
  updateRecipe=()=>{
    const {nameOfRecipe,ingredients,procedure,dietInformation,file,id}=this.state
    axios.put(`http://localhost:3005/rec-api/${id}`,
    {   
         nameOfRecipe:nameOfRecipe,
         ingredients:ingredients,
         procedure:procedure,
         dietInformation:dietInformation,
         file:file
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })

  }
  render() {
    const {nameOfRecipe,ingredients,procedure,dietInformation,file}=this.state
    return (
      <div>
        <AddRecipe/> <br></br>
        <table className='Recipe-table'>
          <thead>
            <tr>
              <th>nameOfRecipe</th>
              <th>ingredients</th>
              <th>procedure</th>
              <th>dietInformation</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(x=>(<>
            <tr>
               <td>{x.nameOfRecipe}</td>
               <td>{x.ingredients}</td>
               <td>{x.procedure}</td>
               <td>{x.dietInformation}</td>
               <td><img className='imageList' src={`http://localhost:3005/images/${x.image}`} alt=''/></td>
               <td><button onClick={()=>this.showPopup(x._id,x.nameOfRecipe,x.ingredients,x.procedure,x.dietInformation,x._file)}>Update</button>
               <button onClick={()=>this.deleteRecipe(x._id)}>Delete</button>
               </td>
              </tr>
              </>))}
          </tbody>
        </table>
        {this.state.poupbool?<>
        <div className='popup'>
          <form className='form-update'>
             <button className='popup-cancel' onClick={this.cancel}>X</button>
             <label>Name Of Recipe</label>
             <input value={nameOfRecipe} onChange={(e)=>this.setState({nameOfRecipe:e.target.value})}/><br></br>
             <label>ingredients</label>
             <input value={ingredients} onChange={(e)=>this.setState({ingredients:e.target.value})}/><br></br>
             <label>Diet Info</label>
             <input value={dietInformation} onChange={(e)=>this.setState({dietInformation:e.target.value})}/><br></br>
             <label>Procedure</label>
             <textarea  id="pro" value={procedure} onChange={(e)=>this.setState({procedure:e.target.value})}/><br></br>
             <label>Images</label><br></br>
             <input type='file' onChange={(e)=>this.setState({file:e.target.files[0]})}/><br></br>
             <button onClick={this.updateRecipe}>Update</button>
          </form>
        </div>
        </>:""}
           <br></br>

      </div>
    )
  }
}

export default Recipe