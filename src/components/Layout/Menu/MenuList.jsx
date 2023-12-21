import React from 'react';
import "./style.css";


const menuList=[
    {
        name:"Pizza",
        prize:200,
        img:"../../../../public/pizza.jpeg"
    },

    {
        name:"Burger",
        prize:250,
        img:"../../../../public/burger.jpeg"
    },
    {
        name:"Cold Drink",
        prize:100,
        img:"../../../../public/drink.jpeg"
    },
    {
        name:"Pasta",
        prize:60,
        img:"../../../../public/pasta.jpeg"
    },
   

    {
        name:"Chawmin",
        prize:60,
        img:"../../../../public/chawmin.jpeg"
    },
    {
        name:"Chaule Bhatore",
        prize:100,
        img:"../../../../public/bhatore.jpeg"
    },
    {
        name:" French frize",
        prize:90,
        img:"../../../../public/french.jpeg"
    },
    {
        name:"Chicken Legs",
        prize:200,
        img:"../../../../public/legs.jpeg"
    },
    {
        name:"Momos",
        prize:90,
        img:"../../../../public/momos.jpeg"
    },
    {
        name:"Pasti",
        prize:50,
        img:"../../../../public/pasti.jpeg"
    },
    {
        name:"Chiecken Roll",
        prize:120,
        img:"../../../../public/roll.jpeg"
    },
    
    {
        name:"Samosa",
        prize:10,
        img:"../../../../public/samosa.jpeg"
    },  


]

const MenuList = () => {
  return (
    <div class="item-container">
    {menuList.map(({ name, prize, img }) => (
        <div class="item">
            <img src={img} alt={name}   />
            <div > 

            <div style={{marginTop:"1rem"}}>
            <h2>{name}</h2>
          
            <h2> { `Rs ${prize}`}</h2>
                </div>
                <div  style={{marginTop:"1rem"}}><button className='btn'>Order</button> </div>
                
            </div>
           
        
        </div>
    ))}
</div>

  )
}

export default MenuList