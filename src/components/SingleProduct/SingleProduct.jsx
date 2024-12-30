import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SingleProduct = ({ item }) => {
    const { product_image, product_id, product_title, price, category } = item
    return (
        <div className="card card-compact bg-white m-5 shadow-md border border-base-200">
            <figure className='rounded-xl'>
                <img
                    src={product_image}
                    alt="Shoes"
                    className='p-4 rounded-xl h-[300px] w-full object-cover border border-base-200' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-lg font-medium text-stone-400'>${price}</p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`}>
                        <button className="btn bg-white rounded-full font-bold border border-[#9538E2] text-[#9538E2]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

SingleProduct.propTypes = {
    item: PropTypes.object.isRequired,
}

export default SingleProduct