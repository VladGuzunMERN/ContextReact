import {createContext, useState} from 'react'


export const Cart = createContext()

const Context = ({children}) => {
 const [cart,setCart] = useState([])
 const [total,setTotal] = useState(0)
 
  return (
        <Cart.Provider value={{cart,setCart,total,setTotal}}>
            {children}
        </Cart.Provider>
    
  )
}

export default Context