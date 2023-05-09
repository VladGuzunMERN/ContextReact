import { useState,useContext } from 'react';
import  SingleProduct  from './SingleProduct';
import {Cart} from '../Context'

const { faker } = require('@faker-js/faker');

faker.seed(100)

const Home = () =>{

  console.log(useContext(Cart))


  const productsArr = [...Array(10)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }))
  
  const [products] = useState(productsArr)  

 

  return <div className='productContainer'>
            {products.map((prod)=>{
        return   <SingleProduct 
                    key={prod.id}
                    prod={prod}
                  />
            })}
        </div>
}

export default Home