import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignInForm from "./Pages/SigIn/Sign-In-Form";
import SignUpForm from "./Pages/SignUp/Sign-up-Form";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./Pages/Shop/Shop";
// import SingleProduct from "./components/single-product/SingleProduct";
// import Categorytype from "./components/CategoryType/CategoryType";
import Checkout from "./components/checkout/Checkout";
import UserProvider from "./context/userContext/UserContext";
import ProductProvider from "./context/productContext/ProductContext";
import CartProvider from "./context/cartContext/CartContext";
import Category from "./components/category/Category";

const APP = () => {
  return ( 
    <>
    <Router>
     <UserProvider>
      <ProductProvider>
      {/* <CartProvider> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/sign-up" element={<SignUpForm/>} />
        <Route path="/sign-in" element={<SignInForm/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:category" element={<Category />} />
      </Routes>
      {/* </CartProvider> */}
      </ProductProvider>
      </UserProvider>
    </Router>
    </>
   );
}
 
export default APP;


