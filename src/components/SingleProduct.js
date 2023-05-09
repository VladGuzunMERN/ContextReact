import { useContext } from 'react';
import { Cart } from '../Context';

const SingleProduct = ({ prod }) => {
  const { cart, setCart, total, setTotal } = useContext(Cart);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
      </div>
      <div>
        {cart.includes(prod) ? (
          <button
            onClick={() => {
              setCart(cart.filter((item) => item.id !== prod.id));
              setTotal((total - Number(prod.price)))
            }}
          >
            remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              setTotal((total + Number(prod.price)))
              setCart([...cart, prod])
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
