import React from 'react';
import "./style.css";


const menuList=[
    {   id:1,
        name:"Pizza",
        prize:200,
        img:"../../../../public/pizza.jpeg"
    },

    {   id:2,
        name:"Burger",
        prize:250,
        img:"../../../../public/burger.jpeg"
    },
    {   id:3,
        name:"Cold Drink",
        prize:100,
        img:"../../../../public/drink.jpeg"
    },
    {   id:4,
        name:"Pasta",
        prize:60,
        img:"../../../../public/pasta.jpeg"
    },
   

    {   id:5,
        name:"Chawmin",
        prize:60,
        img:"../../../../public/chawmin.jpeg"
    },
    {   id:6,
        name:"Chaule Bhatore",
        prize:100,
        img:"../../../../public/bhatore.jpeg"
    },
    {   id:7,
        name:" French frize",
        prize:90,
        img:"../../../../public/french.jpeg"
    },
    {   id:8,
        name:"Chicken Legs",
        prize:200,
        img:"../../../../public/legs.jpeg"
    },
    {   id:9,
        name:"Momos",
        prize:90,
        img:"../../../../public/momos.jpeg"
    },
    {   id:10,
        name:"Pasti",
        prize:50,
        img:"../../../../public/pasti.jpeg"
    },
    {   id:11,
        name:"Chiecken Roll",
        prize:120,
        img:"../../../../public/roll.jpeg"
    },
    
    {   id:12,
        name:"Samosa",
        prize:10,
        img:"../../../../public/samosa.jpeg"
    },  


];




const MenuList = ({handle,cart,setCart}) => {

    const addToCart=(id)=>{
 
        const data = menuList.find((item) => item.id === id);
        setCart((prevCart) => [...prevCart, data]);
        handle();
    }
  return (
    <div class="item-container">
    {menuList.map(({ name, prize, img,id }) => (
        <div class="item" key={id}>
            <img src={img} alt={name}   />
            <div > 

            <div style={{marginTop:"1rem"}}>
            <h2>{name}</h2>
          
            <h2> { `Rs ${prize}`}</h2>
                </div>
                <div  style={{marginTop:"1rem"}}><button className='btn'onClick={()=>addToCart(id)}>Order</button> </div>
                
            </div>
           
        
        </div>
    ))}
</div>

  )
}

export default MenuList