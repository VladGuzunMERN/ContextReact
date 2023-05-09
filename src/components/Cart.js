import SingleProduct from './SingleProduct'
 import {useContext} from 'react'
 import {Cart} from '../Context'


const CartPage = () => {

  const {cart,total} = useContext(Cart)


  return (
    <>
      <div>
        <span style={{fontSize: 30}}>Cart</span>
        <br/>
        <span style={{fontSize: 30}}>{total}</span>
        <div className='productContainer'>
          {cart.map((prod) => (
            <SingleProduct 
              prod={prod}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CartPage