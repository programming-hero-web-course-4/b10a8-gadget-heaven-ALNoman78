import PropTypes from 'prop-types'

const Wishlist = ({ wishlistData }) => {
    // console.log(wishlistData)
    const { product_image, product_title, price, description } = wishlistData
    return (
        <div>
            <div className='flex items-center justify-around bg-white border border-base-300 rounded-xl shadow-lg md:max-w-6xl mx-auto m-4'>
                <div>
                    <img
                        className='h-[220px] object-cover m-4 bg-base-200 rounded-lg border border-base-200'
                        src={product_image} alt="" />
                </div>
                <div className='m-4'>
                    <h3 className='md:text-2xl text-[#09080F] font-medium pb-2'>{product_title}</h3>
                    <p className='text-[rgba(9,8,15,0.6)] pb-2'>{description}</p>
                    <p className='text-[rgba(9,8,15,0.8)] font-bold text-xl pb-2'>Price : ${price}</p>
                </div>
                <button className="btn btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

Wishlist.propTypes = {
    wishlistData: PropTypes.object.isRequired,
}

export default Wishlist