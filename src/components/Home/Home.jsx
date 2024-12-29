import PropTypes from 'prop-types'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {
    return (
        <div className='bg-[#9538E2] px-56 pb-56 text-white'>
            <Banner></Banner>
            <Product></Product>
        </div>
    )
}

Home.propTypes = {}

export default Home