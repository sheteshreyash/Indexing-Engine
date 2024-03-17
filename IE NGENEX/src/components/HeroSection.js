import React from 'react';
import '../style/App.css';
import { ButtonSignup } from './SignUpButton';
import '../style/components/HeroSection.css';
import { ButtonProduct } from './ProductButton';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Best Deals and Opportunities Awaits..</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <ButtonSignup
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </ButtonSignup>
        <ButtonProduct
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Explore Products
        </ButtonProduct>
      </div>
    </div>
  );
}

export default HeroSection;
