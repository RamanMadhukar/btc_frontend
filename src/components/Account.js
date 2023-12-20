import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import { RiVipLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import information from '../images/Information.svg'
import bankcard from '../images/BankCard.svg'
import LoginPassword from '../images/LoginPassword.svg'
import PayPassword from '../images/PayPassword.svg'
import Logoutimg from '../images/LogOut.svg'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'
import accountImg from '../images/btc/accountImg.jpg';
import { FaRegGem } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { PiDevicesLight } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { FaGift } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { BsFileLockFill } from "react-icons/bs";
import { IoReload } from "react-icons/io5";
import { BsArrowUpCircle } from "react-icons/bs";
import { TfiAngleRight } from "react-icons/tfi";
import { CiCircleQuestion } from "react-icons/ci";
import { IoPower } from "react-icons/io5";


const Account = () => {

    const navigate = useNavigate();

    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user, vipimg } = useContext(ContextApi);


    const [name, setname] = useState('')
    const [mobno, setMobno] = useState(0)
    const [id, setid] = useState(0)
    const [Balance, setBalance] = useState(0)
    const [rewards, setRewards] = useState(50)

    const handelSignOut = () => {
        localStorage.clear();
        setUser()
        navigate('/login');
    }

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

            <div className="container-fluid mt-1" style={{ overscrollBehaviorY: 'auto' }}>

                <section className="mt-3 mb-2">

                    <div className="row p-2 ">

                        <div className=" p-2 justify-between flex">

                            <div className="">

                                <div className="  items-center">

                                    <div className="flex space-x-4 items-center">

                                        <img className="rounded-circle rounded mt-2 mb-2 " style={{ border: '1px solid blue' }} src={accountImg} alt="Placeholder" width="50" height="50" />

                                        <b className="text-white fs-4">{userDetails?.mobno} &nbsp;<span className="text-red-900">L{userDetails?.vipLevel}</span></b>

                                    </div>

                                    <b className=""><small className="text-white">Dnex</small></b>

                                </div>
                            </div>
                            <div className=" flex text-center items-center">
                                <span className="text-white   p-1 fs-4" style={{ borderRadius: '5px', backgroundColor: '#07184f', border: '1px solid blue' }}>
                                    Score: 60
                                    <FaRegGem className='mx-auto' />
                                </span>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="customborder p-2 mb-3">
                                <div className="flex justify-between items-center">
                                    <div className="text-center text-white p-2">
                                        <h5 className="text-white">₹ {(userDetails?.recharge_amount)?.toFixed(2)}</h5>
                                        <span className="text-[10px] flex items-end"><IoWalletOutline size={25} /> &nbsp;&nbsp; Recharge Wallet</span>
                                    </div>
                                </div>
                                <hr style={{ color: 'white' }} />
                                <div className="row mb-3">
                                    <div className="col-lg-4 col-4">
                                        <div className="text-center">
                                            <h5 className="text-white">₹ {(userDetails?.balance)?.toFixed(2)}</h5>
                                            <span className="text-white text-[10px]">Wallet Balance</span>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-4">
                                        <div className="text-center">
                                            <h5 className="text-white">₹ 0.00</h5>
                                            <span className="text-white textsizeall">Today profit</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-4">
                                        <div className="text-center">
                                            <h5 className="text-white">₹ {(userDetails?.earning)?.toFixed(2)}</h5>
                                            <span className="text-white textsizeall">Total profit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-between">
                                <div className="" style={{ width: '50%' }}>
                                    <Link to={'/widthdrawlrecords'} className="btn btn-outline-primary w-full text-white" style={{ color: 'white' }} >Withdrawal</Link>
                                </div>
                                <div className="w-1/2" style={{ width: '50%' }}>
                                    <Link to={'/deposit'} className="btn btn-primary w-full" >Recharge</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="customborder p-5">
                                <div className="row mb-7">

                                    <div className="" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/Workingdevice'} style={{ textDecoration: 'none' }} className='flex flex-col items-center'>
                                                <span className="text-white"><PiDevicesLight size={27} /></span>
                                                <p className="text-white text-[10px]">My Device</p>
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/team'} href="/Member/Team" className='flex flex-col items-center'>
                                                <span className="text-white"><IoPeopleOutline size={27} /></span>
                                                <p className="text-white text-[10px]">My Team</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/invite'} className='flex flex-col items-center'>
                                                <span className="text-white"><LuLink className='rotate-45' size={27} /></span>
                                                <p className="text-white text-[10px]">Invite</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/gift'} href="/Member/Gift" className='flex flex-col items-center'>
                                                <span className="text-white"><FaGift size={27} /></span>
                                                <p className="text-white text-[10px]">Gift</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/records'} className='flex flex-col items-center'>
                                                <span className="text-white"><BsCardList size={27} /></span>
                                                <p className="text-white text-[10px]">Record</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/bankCard'} href="/Member/Bank" className='flex flex-col items-center'>
                                                <span className="text-white"><BsBank size={27} /></span>
                                                <p className="text-white text-[10px]">Bank</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/changepassword'} className='flex flex-col items-center'>
                                                <span className="text-white"><BsFileLockFill size={27} /></span>
                                                <p className="text-white text-[10px]">Password</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-3" style={{ width: '25%' }}>
                                        <div className="text-center">
                                            <Link to={'/vip'} href="/Member/VipUpgrade" className='flex flex-col items-center'>
                                                <span className="text-white"><IoReload size={27} /></span>
                                                <p className="text-white text-[10px]">Vip Upgrade</p>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mb-20'>
                    <div className="row">
                        <div className="w-full">
                            <div className="customborder p-2">
                                <div className="p-2">

                                    <a href="/Member/Rule">
                                        <div className="flex justify-between items-center mb-2" style={{ borderBottom: '1px solid blue' }}>
                                            <p className="text-white textsizeall mb-4 "><BsArrowUpCircle className="inline mr-2 rotate-45 text-[blue]" size={10} />Rules</p>
                                            <span><TfiAngleRight className='text-white' size={18} /></span>
                                        </div>
                                    </a>

                                    <Link to={'/FAQ'} href="/Member/FAQ">
                                        <div className="flex justify-between items-center mb-2" style={{ borderBottom: '1px solid blue' }}>
                                            <p className="text-white  textsizeall mb-4"><CiCircleQuestion className="inline mr-2 text-[blue]" size={10} /> FAQ</p>
                                            <span><TfiAngleRight className='text-white' size={18} /></span>
                                        </div>
                                    </Link>

                                    <div className="flex justify-between items-center mb-2" style={{ borderBottom: '1px solid blue' }}>
                                        <p className="text-white  textsizeall mb-4"><BsArrowUpCircle className=" rotate-180 inline mr-2 text-[blue]" size={10} /> App Download</p>
                                        <span><TfiAngleRight className='text-white' size={18} /></span>
                                    </div>

                                    <div onClick={handelSignOut} className="flex justify-between items-center mb-2" style={{ borderBottom: '1px solid blue' }}>
                                        <p href="#" className="text-white textsizeall mb-4"> <IoPower className="inline mr-2 text-[blue]" size={10} /> Sign out</p>
                                        <span><TfiAngleRight className='text-white' size={18} /></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* footer  */}
            <Navbar />
        </>
    )
}

export default Account