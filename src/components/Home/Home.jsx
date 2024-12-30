import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner></Banner>
            </div>
            <Product></Product>
        </div>
    )
}

Home.propTypes = {}

export default Home