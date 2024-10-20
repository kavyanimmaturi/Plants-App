import React from "react";
import PlantProducts from "../PlantProducts";
import "./index.css";
const productsList = [
    {
        uniqueNo: 1,
        logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
        imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402745/Plants-img1_vxoyvl.jpg",
        view: "View Product",
    },
    {
      uniqueNo: 2,
        logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
        imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729413061/Plants-img2_cyebzp.jpg",
        view: "View Product",
    },
    {
      uniqueNo: 3,
        logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
        imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729413110/Plants-img3_fep5oy.jpg",
        view: "View Product",
    },
    {
      uniqueNo: 4,
        logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
        imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729413178/Plants-img4_z8nmnh.jpg",
        view: "View Product",
    },
    {
      uniqueNo: 5,
      logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
      imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729413178/Plants-img4_z8nmnh.jpg",
      view: "View Product",
    },
      {
        uniqueNo: 6,
        logo: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1729402852/wishlist-img_jmyjqx.png",
        imageUrl:"https://res.cloudinary.com/dtv22dsxc/image/upload/v1729413178/Plants-img4_z8nmnh.jpg",
        view: "View Product",
      }
    

]

const ProductsListSection = () => {
  return(
        <div className="product-list">
          
        {productsList.map((plant) => (
          <PlantProducts key={plant.id} plant={plant} />
        ))}
        
      
    </div>
    )
}

export default ProductsListSection;