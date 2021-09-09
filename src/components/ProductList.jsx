import React, {useState,useEffect }from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ProductList(){
    const [productList, setProductList] = useState([])

    const obtenerProductos = async() => {
        const res = await axios.get('https://first-ecommerce-go.herokuapp.com/products')
        const products = await res.data
        setProductList(products)
    }

    useEffect(() => {
        obtenerProductos()
    },[])

    return(
        <div>
            <h2>Lista de productos</h2>
            {productList.map( (item) => (
                <div key={item.id}>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList