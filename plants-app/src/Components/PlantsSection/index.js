import ProductsListSection from "../ProductsListSection"
import "./index.css"

const PlantsSection = () => {
    return (
         <div className="plants-container">
            <div className="cards-container">
                <button className="heading main">Plants</button>
                <button className="heading normal">Pots</button>
                </div>
                 <p className="description">
                   Plants are multicellular organisms in the kingdom Plantae that play an essential role in the earth’s ecosystem. They are autotrophic, meaning they produce their own food through photosynthesis, using sunlight, carbon dioxide, and water to create energy in the form of glucose. Plants also produce oxygen as a byproduct, which is crucial for the survival of most living organisms.   
                  </p>
              <div className="nursery-cont">
                <h1 className="title">Nursery</h1>
                <div className="nursery-cards-list">

                <div className="nursery-cards">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729350654/nursery-img1_pzcrjl.png" alt="image" className="img"/>
                    <p className="nursery-para">Container gardening flowers are a must for outdoor summer planters.</p>
                </div>

                <div className="nursery-cards">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729351655/nursery-img2_zevf4m.png" alt="image" className="img"/>
                    <p className="nursery-para">Different plants bloom at various times of the year. </p>
                </div>

                <div className="nursery-cards">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729351754/nursery-img3_ipg9hf.png" alt="image" className="img"/>
                    <p className="nursery-para"> Flowering plants come in a stunning array of colors.</p>
                </div>
                
                <div className="nursery-cards">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729352067/nursery-img4_ebtjpt.png" alt="image" className="img"/>
                    <p className="nursery-para">Many flowering plants produce delightful fragrances,which enhance their beauty.</p>
                </div>

                <div className="nursery-cards">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729352159/nursery-img5_dhff3u.png" alt="image" className="img"/>
                    <p className="nursery-para">Many flowering plants produce delightful fragrances,which enhance their beauty.</p>
                </div>
            </div> 
            </div>
            <ProductsListSection/>   
         </div>
        
         
    )
}

export default PlantsSection