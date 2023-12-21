import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <h2 className='restaurant-name'>Restaurant</h2>
        <div className='cart'>
          <div className='add-to-cart-icon'>Cart</div>
          <div className='count'>0</div>
        </div>
      </div>
      <div className='im'>
        <img src='../../../public/food2.jpeg' className='cover-image' />
      </div>
      <div className='outer-desc'>
        <div className='desc'>
          <h2>Delicious Food, Delivered to you..</h2><br/><br/>
          <h4>From mouth-watering appetizers to delectable main courses and divine desserts, 
            our chefs take pride in using the finest ingredients to deliver flavors
            that will leave you craving for more </h4>
            <h4>Planning your visit is made easy with our online reservation system</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
