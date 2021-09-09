import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const {id} = useParams()
    const [product, setProduct]= useState([])

    const obtenerProducto = async() => {
        const res = await axios.get(`https://first-ecommerce-go.herokuapp.com/products/${id}`)
        const product = await res.data
        setProduct(product)
    }

    useEffect(() => {
        obtenerProducto()
    }, [])

    return(
        <div>
            <h2>
                {product.title}
            </h2>
            <h2>
                {product.description}
            </h2>
            <h2>
                {product.price}
            </h2>
            
        </div>
    )
}

export default Product