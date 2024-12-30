import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { product_id } = useParams()
    console.log(product_id);
    const allData = useLoaderData()
    return (
        <div>ProductDetails</div>
    )
}

ProductDetails.propTypes = {}

export default ProductDetails