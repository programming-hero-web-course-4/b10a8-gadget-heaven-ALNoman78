import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Product = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h3 className='text-4xl text-center font-bold md:mt-[26rem] my-9'>Explore Cutting-Edge Gadgets</h3>
            <div className="flex w-full flex-col lg:flex-row  gap-6">
                <div className="card bg-base-300 rounded-box grid md:w-[14%] flex-grow place-items-center">
                    <ul className='w-full font-medium bg-white shadow-md p-5 rounded-xl border'>
                        <li className='p-3  bg-[#9538E2]  rounded-xl text-white m-2 '>All Products</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>Laptop</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>Mobile</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>Accessories</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>Smart Watch</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>MacBook</li>
                        <li className='p-3 px-6 m-2 bg-base-200 rounded-xl'>IPhone</li>
                    </ul>
                </div>
                <div className="card bg-base-300 rounded-box grid md:w-[70%] flex-grow place-items-center">content</div>
            </div>
        </div>
    )
}

Product.propTypes = {}

export default Product