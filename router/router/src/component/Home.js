// import React from 'react'
// import {useNavigate} from 'react-router-dom'

// const Home = () => {
//   const navigate=useNavigate()
//   return (
//     <div>
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={()=>navigate("order",{replace:true})}>
//               Order Now </button>
//         </div>
      
//     </div>
//   )
// }

// export default Home
import React from 'react'
import {useNavigate} from 'react-router-dom'
import home from './home.jpeg'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div>
            {/* <h1>Home Page</h1> */}
            <img src={home} width="100%"/> 
            <button onClick={()=>navigate("order",{replace:true})}>
              See Recipes Menu</button>
              <div className="wrapper">
          <h1>
            <u>Customers Reviews</u>
          </h1>
          <div className="itemss">
            <div className="item1">
              <img src="https://th.bing.com/th/id/OIP.oYH-c8FA3KwaysvEhOU7CgHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        
              <p>
                “always try to follow their simple recipes in my free time.
                 They sometimes turns out very great. 
                They have lots of easy recipes to follow on their page.
                very good website with all food related knowledge. 
                They share simple and easy to make recipes at home."
              </p>
            </div>
            <div className="item2">
            <img src="https://th.bing.com/th/id/OIP.H3xccwrSRn0StLbL72ZaNQHaE7?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
              <p>
              "Really just adding to the earlier reviews, 
              this is a huge and varied resource on the subject of food in all its forms,
               not just a local restaurant review or recipe guide - though it's those things, too. 
                but this one is broad enough and regarded as honest enough."
              </p>
            </div>
            <div className="item3">
              <img src="https://th.bing.com/th/id/OIP.j2LF8M01Yy0K3EmILRzLdwHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
              <p>
                “Highly recommended website for some great food related blogs and recipes. 
                This website is so knowledgable and informative. 
                Beautiful photographs and healthy food recipes. 
                Really like this page. Satisfied with the service.
                higly recommended”
              </p>
            </div>
          </div>
        </div>
          
        </div>
      
    </div>
  )
}

export default Home