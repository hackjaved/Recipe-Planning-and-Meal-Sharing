// import React from 'react'
// import {useNavigate} from 'react-router-dom'

// const Order = () => {
//     const navigate=useNavigate()
//   return (
//     <div>
//       Order Confirmed
//     <button onClick={()=>navigate(-1)}>Go back</button>
//     </div>
//   )
// }

// export default Order
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState(''); // State for search input
  const recipe = [
    //  recipes data 
    { id: 1, name: 'Burger', imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/612/466/desktop-wallpaper-burgers-high-quality-zinger-burger.jpg' },
      { id: 2, name: 'Pizza', imageUrl: 'https://images1.livehindustan.com/uploadimage/library/2022/07/13/16_9/16_9_6/pizza_1657717524.jpg' },
      { id: 3, name: 'Veg Rolls', imageUrl: 'https://t4.ftcdn.net/jpg/02/25/29/25/360_F_225292516_OtmnfD4fPHefLvW51pNKmn5idU2AEKtT.jpg' },
      { id: 4, name: 'French Fries', imageUrl: 'https://www.shutterstock.com/shutterstock/videos/1054025384/thumb/5.jpg?ip=x480' },
      { id: 5, name: 'Chicken Lollipop', imageUrl: 'https://img.shpy.in/135081/1642859468700_chicken%20lollipop.png?width=600' },
      { id: 6, name: 'Sandwich', imageUrl: 'https://th.bing.com/th/id/OIP.mrmJf_FKwlJLZBPDnUxUHgHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { id: 7, name: 'Chicken Mandi', imageUrl: 'https://www.sandyathome.com/wp-content/uploads/2021/05/chicken-mandi.jpg' },
      { id: 8, name: 'chilli Chicken', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUc7aGLIvS5CWgGXLBI-0rQIsrxdGgUTo-Q&usqp=CAU' },
      { id: 9, name: 'Barbecue Chicken', imageUrl: 'https://static.toiimg.com/thumb/83330410.cms?imgsize=498236&width=800&height=900' },
      { id: 10, name: 'chinese noodles', imageUrl: 'https://kfoods.com/images1/newrecipeicon/chinese-noodle-in-biryani-style_11489.jpg' },
      { id: 11, name: 'Gobi Manchurian', imageUrl: 'https://www.roguechef.com/wp-content/uploads/2021/01/Gobi-Manchurian.png' },
      { id: 12, name: 'Keema Biryani', imageUrl: 'https://www.foodfusion.com/wp-content/uploads/2019/05/Dum-qeema-Biryani-Recipe-by-Food-fusion-1.jpg' },
      {id:13,name:'mutton Biryani',imageUrl: 'https://th.bing.com/th?id=OIP.-FpVTvpCHfmuP3nedmscDQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'},
      {id:14,name:'chicken rice',imageUrl: 'https://kfoods.com/images1/newrecipeicon/chicken-fried-rice_7191.jpg'},
      {id:15,name:'chicken-wings',imageUrl:'https://th.bing.com/th?id=OIP.N9zA3yPpDAcFQLCHvuFcTgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'},
      {id:16,name:'Brownie',imageUrl:'https://twocupsflour.com/wp-content/uploads/2019/06/web-brownies-189.jpg'},
      {id:17,name:'Choco lava cake',imageUrl:'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/01/Molten-Chocolate-Lava-Cakes-for-Two-2.jpg?resize=1360%2C2040'},
      {id:18,name:'French toast',imageUrl:'https://www.savorynothings.com/wp-content/uploads/2021/06/french-toast-image-4-1024x1536.jpg'},
      {id:19,name:'Fruit Salad',imageUrl:'https://1.bp.blogspot.com/--skGijVWbIs/YAh0RJgdGSI/AAAAAAAAxDY/WbxXH3RLxGMs_qJ1IVxla-Lp89h4lFXGwCLcBGAsYHQ/s1200/Summer%2BBerry%2BFruit%2BSalad%2Bwith%2BHoney%2BLime%2BGlaze%2B%25281%2Bof%2B1%2529-2.jpg'},
      {id:20,name:'Pani Puri',imageUrl:'https://i1.wp.com/www.binjalsvegkitchen.com/wp-content/uploads/2015/03/Pani-Puri-H1-WP-WT-S.jpg'},
      {id:21,name:'sheer khurma',imageUrl:'https://i.pinimg.com/originals/d3/5f/a1/d35fa12be51cc85757259179550f6064.jpg'}
  ];

  // Filter recipes based on search input
  const filteredRecipes = recipe.filter((recipes) =>
    recipes.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle search input changes
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger a refresh when Enter key is pressed
      e.preventDefault(); // Prevent the default form submission
      setSearchInput(searchInput); // Set the state to the same value to refresh
    }
  };

  return (
    <div>
      <h1>Our Exclusive Recipes Menu...</h1>
      <input
        type="text"
        placeholder="Search for recipes"
        value={searchInput}
        onChange={handleSearchInputChange}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />
      <div className="img-container">
        {/* Recipe items */}
        {filteredRecipes.map((recipes) => (
          <div className="recipe-item" key={recipes.name}>
            <img src={recipes.imageUrl} alt={recipes.name} />
            <h3>{recipes.name}</h3>
          </div>
        ))}
      </div>
      
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Order;