import { Link } from 'react-router-dom';
import crown from "../../assets/crown.svg"
import './Navigation.scss';
import CartIcon from '../cartIcon/CartIcon';
import { getAuth } from 'firebase/auth';
import { userContext } from '../../context/userContext/UserContext';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext/CartContext';

import CartdropDown from '../cartDropdown/CartdropDown';
const Navigation = () => {
    const {user, isSuccessful} = useContext(userContext)
    const{toggleCart}= useContext(cartContext)
    const auth = getAuth()

    const onSignOut = () =>  auth.signOut()

    

   

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container logo' to='/'>
          {/* <CrwnLogo className='logo' /> */}
          <img src={crown} className='logo' alt="c" />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {user ? <Link onClick={onSignOut} className='nav-link' to=''>
            SIGN Out
          </Link> : <>
          <Link className='nav-link' to='/sign-up'>
            SIGN UP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link> 
          </>}
            <CartIcon  />
        </div>
        {toggleCart && <CartdropDown />}
      </div>
    </>
  );
};

export default Navigation;
 