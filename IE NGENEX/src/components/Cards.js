import React from 'react';
import '../style/components/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Collections and our Best Sellers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bestseller1.jpg'
              text='Unleash your individuality and make a statement with our bold and vibrant shoe selections.'
              label='Trendy Treads'
              path='/services'
            />
            <CardItem
              src='images/bestseller2.jpg'
              text='Elevate your everyday look with our trendsetting designs and premium quality materials.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bestseller3.jpg'
              text='Elevate your digital experience with our sleek and powerful laptops.'
              label='Digital Ocean'
              path='/services'
            />
            <CardItem
              src='images/bestseller4.jpg'
              text='Make a statement with every step with our smartwatches.'
              label='Style'
              path='/products'
            />
            <CardItem
              src='images/bestseller5.jpg'
              text="Elevate your wardrobe with timeless elegance and contemporary flair."
              label='Fashion'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
