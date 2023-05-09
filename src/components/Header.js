import { Link } from "react-router-dom";
import './styles.css'
import {useContext} from 'react'
import {Cart} from '../Context'

function Header() {

  const {cart} = useContext(Cart)

  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
