import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Previous Works</h1>
            <p className="pl-desc">Commonly used Frameworks: Mongodb, React, MUI, Bootstrap, Tailwind</p>
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
