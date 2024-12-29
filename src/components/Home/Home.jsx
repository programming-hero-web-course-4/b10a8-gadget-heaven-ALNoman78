import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {
    return (
        <div>
            <div className='bg-[#9538E2] rounded-b-xl px-56 pb-56 text-white'>
                <Banner></Banner>
            </div>
            <Product></Product>
        </div>
    )
}

Home.propTypes = {}

export default Home