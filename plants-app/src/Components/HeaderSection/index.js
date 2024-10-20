import { BsCart, BsFillPersonFill } from "react-icons/bs";
import "./index.css";
const HeaderSection = () => {
    return(
        <nav className="nav-header">
               <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1729326710/header-logo_maao3b.png" alt="logo" className="logo"/>
              
                  <ul className="nav-list">
                    <li className="nav-items">Home</li>
                    <li className="nav-items item">Plants & Pots</li>
                    <li className="nav-items">Tools</li>
                    <li className="nav-items">Our Services</li>
                    <li className="nav-items">Blog</li>
                    <li className="nav-items">Our Story</li>
                    <li className="nav-items">FAQs</li>
                    </ul>
                    <li className="nav-items nav"><BsFillPersonFill />
                       <p>Profile</p>
                       </li>
                    <li className="nav-items nav">
                       <BsCart/>
                       <p>Cart</p>
                       </li>
        </nav>

    )
}

export default HeaderSection