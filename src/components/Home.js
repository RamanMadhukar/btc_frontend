import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import inviteBg from '../images/invitebg.png'
import { RiVipLine } from 'react-icons/ri'
import splitNotchL from '../images/notch_L.svg'
import splitNotchR from '../images/notch_R.svg'
import { BiCoin } from 'react-icons/bi'
import vip from '../images/vip.svg'
import message from '../images/message.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import task from '../images/05.svg'
import invite from '../images/06.svg'
import img201 from '../images/201.png'
import img301 from '../images/301.png'
import Card from './Card'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Tradmark from './Tradmark'
import { ContextApi } from '../App'
import { RxCross1 } from 'react-icons/rx'
import herobg from '../images/galaxysone/home bg.jpg'
import { AiFillWallet } from 'react-icons/ai'
import { IoWallet } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import ProductCard from './ProductCard'
import homeLogo from '../images/btc/phoneLogo.png'
import b1 from '../images/btc/b1.jpg';
import b2 from '../images/btc/b2.jpg';
import b3 from '../images/btc/b3.jpg';
import b4 from '../images/btc/b4.jpg';
import b5 from '../images/btc/b5.jpg';
import Slider from './Slider'




const Home = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [wpwd, setWpwd] = useState(localStorage.getItem('wpwd'))
    const [telegramopen, setTelegram] = useState(false)
    const [toogle, setToogle] = useState(true)

    // console.log(userDetails);

    // useEffect(() => {
    //     // console.log(wpwd);
    //     if (wpwd === 'undefined') {
    //         toaster('Set Trade Password')
    //         setTimeout(() => {
    //             navigate('/widthdrawlpassword')
    //         }, 3000);
    //     }
    // }, [])

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }

    }, [])

    return (
        <>
            <Navbar />
            <Popup />

            <div className="p-5 pb-20">

                <img src={homeLogo} className='w-20' alt="" />

                <div className="my-10">
                    <Slider />
                </div>

                <div className="text-white flex">

                    <div onClick={() => setToogle(true)} className={`IN Miner border-0 border-solid border-white bg-transparent text-white px-4 py-3 ${toogle && 'border-b-2'} `}>In Miner</div>

                    <div onClick={() => setToogle(false)} className={`IN Miner border-0 border-solid border-white bg-transparent text-white px-4 py-3 ${!toogle && 'border-b-2'} `}>Staking Token</div>

                </div>

                <div className="flex flex-col mt-5">
                    {toogle ?
                        <>
                            <ProductCard
                                product_image={b1}
                                product_type={0}
                                plan_cycle={120}
                                plan_amount={630}
                                plan_daily_earning={25}
                                pre_sale={false}
                            />

                            <ProductCard
                                product_image={b2}
                                product_type={0}
                                plan_cycle={120}
                                plan_amount={2100}
                                plan_daily_earning={110}
                                pre_sale={false}
                            />

                            <ProductCard
                                product_image={b3}
                                product_type={0}
                                plan_cycle={120}
                                plan_amount={5500}
                                plan_daily_earning={321}
                                pre_sale={false}
                            />

                            <ProductCard
                                product_image={b4}
                                product_type={0}
                                plan_cycle={120}
                                plan_amount={18000}
                                plan_daily_earning={935}
                                pre_sale={false}
                            />

                            <ProductCard
                                product_image={b5}
                                product_type={0}
                                plan_cycle={120}
                                plan_amount={50000}
                                plan_daily_earning={265}
                                pre_sale={false}
                            />
                        </>

                        :
                        <div class="row mb-3">
                            <div class="col-span-12">
                                <div class="p-2 customborder">
                                    <div class="text-center">
                                        <h3 class=" text-white">No Device</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </div>

            </div>

        </>
    )
}

export default Home