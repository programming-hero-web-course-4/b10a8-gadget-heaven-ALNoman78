import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'
import DynamicText from '../DynamicText/DynamicText'

const ProductDetails = () => {
    const { product_id } = useParams()
    console.log(product_id);
    const allData = useLoaderData()
    return (
        <div>
            <DynamicText 
            headingText={'Product Details'}
            paraText={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></DynamicText>
        </div>
    )
}

ProductDetails.propTypes = {}

export default ProductDetails