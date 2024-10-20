import "./index.css"

const SearchBar = () => {
    return (
         <div className="search-box">
             <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729339296/search-img_tiq3n7.png" alt="search-logo" className="search-logo"/>
             <input type="text" className="input-box" placeholder="Search Plant"/>
             <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729340734/search-flower-img_z3iqee.png" alt="plant-logo" className="plant-logo"/>
         </div>
    )
}

export default SearchBar