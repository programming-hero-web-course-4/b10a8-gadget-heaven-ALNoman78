import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DynamicText from '../DynamicText/DynamicText'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../Utility/addToDB';
import Cart from '../Cart/Cart';

const Dashboard = () => {
    const cartData = useLoaderData();
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCartList = getStoredData()
        const storedListInt = storedCartList.map((id) => parseInt(id))

        const allCartList = cartData.filter((items) => storedListInt.includes(items.product_id))
        setCart(allCartList)
    }, [])
    return (
        <div className='font-sora'>
            <DynamicText
                headingText={'Dashboard'}
                paraText={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></DynamicText>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-xl font-bold'>Cart : {cart.length}</h2>
                        <div>
                            Total Amount : {}
                        </div>
                        <div>
                            {
                                cart.map((item , idx) => <Cart key={idx} cartItems={item}></Cart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

Dashboard.propTypes = {}

export default Dashboard