import React from 'react'
import PropTypes from 'prop-types'
import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({ cartItems }) => {
    const { product_image, product_title, price, category, description, specification, rating, } = cartItems
    // console.log(cartItems);
    return (
        <div className='flex items-center bg-white border border-base-300 rounded-xl shadow-lg md:max-w-6xl mx-auto m-4'>
            <div>
                <img
                    className='h-[300px] object-cover m-4 bg-base-200 rounded-lg border border-base-200'
                    src={product_image} alt="" />
            </div>
            <div className='m-4'>
                <h3 className='md:text-2xl text-[#09080F] font-medium pb-2'>{product_title}</h3>
                <p className='text-[rgba(9,8,15,0.6)] pb-2'>{description}</p>
                <p className='text-[rgba(9,8,15,0.8)] font-bold text-xl pb-2'>Price : ${price}</p>
            </div>
            <p className='text-2xl m-4'>
                <TiDeleteOutline></TiDeleteOutline>
            </p>
        </div>
    )
}

Cart.propTypes = {}

export default Cart