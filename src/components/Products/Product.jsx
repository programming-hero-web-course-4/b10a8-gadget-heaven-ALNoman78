import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    //find by category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState([])
    const categories = ['Mobile', 'Laptop', 'Accessories']

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const fetchedData = (category) => {
        setSelectedCategory(category)
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }
    return (
        <div className='font-sora'>
            <h3 className='md:text-4xl text-2xl text-center font-bold md:mt-[26rem] my-9'>Explore Cutting-Edge Gadgets</h3>
            <div className="flex w-full flex-col lg:flex-row md:gap-6">
                <div className="card rounded-box grid md:w-[14%] md:h-[600px] flex-grow">
                    <ul className='w-full font-medium bg-white shadow-md md:p-5 rounded-xl border'>
                        <li className='p-3  bg-[#9538E2]  rounded-xl text-white m-2 '>All Products</li>
                        {
                            categories.map((category) => (
                                // <button key={category} onClick={() => fetchedData(category)}>
                                <li key={category} onClick={() => fetchedData(category)} className='p-3 bg-base-200 text-[rgba(9,8,15,0.6)] rounded-xl m-2 '>
                                    {
                                        category
                                    }
                                </li>
                                // </button>
                            ))
                        }
                    </ul>
                </div>
                <div className="card rounded-box grid md:w-[70%] flex-grow">
                    <h3>content : {items.length}</h3>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            items.map((category, idx) => <SingleProduct key={idx} item={category}></SingleProduct>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {}

export default Product