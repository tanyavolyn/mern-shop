
import { useContext, useEffect } from "react";

import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
  import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';





function LoginCartButton(){
    
const {getTotalCartItems} = useContext(ShopContext);
useEffect(()=>{
AOS.init({duration:1000})
}, [])
return(
    <div className="container-login">
           {localStorage.getItem("auth-token") 
   ? <button className="btn-login" onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}><img className="login-icon" src="user.png" alt="bild" height="24px" width="24px"/>Abmelden</button>
   : <Link to="/login" ><button className="btn-login"> <img className="login-icon" src="user.png" alt="bild" height="25px" width="25px"/>Anmelden</button></Link>}

   <Link to="/cart" className="cart-icon"><img src="market.png" alt="bild" height="24px" width="24px"/> <p>({getTotalCartItems()})</p></Link>
  
    </div>
)

}
export default LoginCartButton;