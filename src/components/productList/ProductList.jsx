import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Previous Works</h1>
            <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor, nibh quis venenatis vehicula, ex ex maximus elit, at sagittis justo libero ac nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ornare sem lacus, et mollis odio sollicitudin a</p>
        </div>
        <div className="pl-list">
            {products.map(product => (
              <Product key={product.id} img={product.img} link={product.link} />
            ))}
        </div>
    </div>
  )
}

export default ProductList
