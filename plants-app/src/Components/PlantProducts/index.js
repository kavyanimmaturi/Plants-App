
import React from 'react';
import PlantDetails from '../PlantDetails';
import './index.css';
const PlantProducts = ({ plant }) => {
  
  return (
    <div className="plant-card-items">
    <div className="product-card">
      <img src={plant.logo} alt="image" className="product-image" />
      <div className="product-info">
        <img src={plant.imageUrl} alt="avatar" className='plant-img'/>
        <div className='view-cont'>
        <p className="view">View Product</p>
        </div>
        </div>
      </div>
      <div>
  </div>
  <PlantDetails/>
  </div>
  );
};

export default PlantProducts;
