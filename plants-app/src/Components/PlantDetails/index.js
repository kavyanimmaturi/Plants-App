import React, { useState } from "react";
import Modal from "../Modal";
import "./index.css";
const PlantDetails = (plant) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    return(
        <div className="plant-details-container">
            <h1 className="plant-title">Monsterra</h1>
            <p className="plant-main">Indoor Plant, Low maintenance</p>
            <div className="rating-cont">
            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729406051/stars-rating-img_do50fu.png" alt="rating" className="rating-img"/>
            <span>4.9</span>
            </div>
             <div className="plant-price">
                <p className="normal-price">Rs.399</p>
                <p className="offer-price">Rs.299</p>
             </div>
             <div className="buttons-container">
                <button className="add-btn" onClick={handleAddToCart}>- Add to cart +</button>
                <button className="buy-btn">Buy on Rent</button>
             </div>
             <div>
             <div>
            <Modal show={isModalOpen} onClose={handleCloseModal}>
             <h1>Your Cart</h1> 
             <hr className="separator"/>
             <h2>Congratulations!!</h2>
             <p>Selected product has been added to your cart.</p>
             <button onClick={handleCloseModal} className="close-modal-button">
                           Close
             </button>
             </Modal>
             </div>
         </div>
        </div>
    )
}

export default PlantDetails