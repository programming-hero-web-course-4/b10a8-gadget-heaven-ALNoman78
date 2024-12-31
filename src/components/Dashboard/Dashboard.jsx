import React, { useEffect, useState } from 'react'
import DynamicText from '../DynamicText/DynamicText'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../Utility/addToDB';
import Cart from '../Cart/Cart';
import { FaSort } from "react-icons/fa";
import groupImage from '../../assets/Group.png'

const Dashboard = () => {
    const cartData = useLoaderData();
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCartList = getStoredData()
        const storedListInt = storedCartList.map((id) => parseInt(id))

        const allCartList = cartData.filter((items) => storedListInt.includes(items.product_id))
        setCart(allCartList)
    }, [])

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className='font-sora relative'>
            <DynamicText
                headingText={'Dashboard'}
                paraText={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></DynamicText>
            <div>
                <Tabs className='border-b-0'>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex items-center justify-between md:max-w-7xl mx-auto'>
                            <h2 className='text-xl font-bold'>Cart</h2>
                            {/* total amount , short ,  */}
                            <div className='flex items-center justify-between gap-5'>
                                <p className='text-xl font-bold'>Total Amount : $
                                    {
                                        totalPrice
                                    }
                                </p>
                                <div className="dropdown">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn m-1 rounded-full border border-[#8332C5] font-medium bg-white">
                                        Sort by Price
                                        <FaSort></FaSort>
                                    </div>
                                </div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button
                                    className='btn bg-[#8332C5] text-white rounded-full'
                                    onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle flex-col items-center justify-center text-center">
                                    <div className="modal-box text-center">
                                        <div className='flex justify-center'>
                                            <img src={groupImage} alt="" />
                                        </div>
                                        <p className="py-4 font-bold text-lg">Payment Successfully</p>
                                        <p>Thanks for purchasing.</p>
                                        <br />
                                        <span>
                                            Total Price : $
                                            {
                                                totalPrice
                                            }
                                        </span>
                                        <div className="modal-action">
                                            <form method="dialog" className='w-[20rem]'>

                                                <button className="btn mt-4">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                        {/* added to cart items */}
                        <div>
                            {
                                cart.map((item, idx) => <Cart key={idx} cartItems={item}></Cart>)
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