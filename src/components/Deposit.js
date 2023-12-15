import React, { useContext, useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App'
import QuickAmountCard from './QuickAmountCard'
import BASE_URL from '../api_url'
import axios from 'axios'
import floatings from '../images/galaxysone/g2.png'
import { BiSolidCoinStack } from 'react-icons/bi'
import { HiMiniArrowLongLeft } from 'react-icons/hi2'

const Deposit = () => {

    const navigate = useNavigate();

    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);

    const [Deposit, setDeposit] = useState('')
    const [selected, setSelected] = useState()
    const [amounts, setAmounsts] = useState({});


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


    const amount = [650, 1800, 4100, 6500, 14500, 30000, 50000, 95000]

    const handleRecharge = () => {
        if (parseInt(Deposit)) {
            if (Number(amounts.amount) > Number(Deposit)) {
                toaster(`Amount should be greater than ₹${amounts.amount}`);
                return;
            }
            navigate(`/recharge_window/${Deposit}`);
        } else {
            toaster('Enter a valid recharge amount');
        }
    }

    useEffect(() => {
        const getData = async () => {

            //console.log('hello');
            const dataRes = await axios.get(`${BASE_URL}/amounts`).then(({ data }) => data);
            //console.log(dataRes);
            if (dataRes) {
                // console.log(dataRes);
                setAmounsts(dataRes);
            }

        }

        getData()

    }, [])


    return (

        <>

            <div className=" after:contents-[' '] after:fixed ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px]">
                        <div className=" max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center justify-between p-4 ">

                            <Link to={'/account'} className="w-[60px] h-[50px] text-center text-white z-[2] flex justify-center items-center ">
                                <HiMiniArrowLongLeft size={22} /> <span className='text-lg'>Back</span>
                            </Link>

                            <h2 className=' text-center text-lg font-medium z-[1] text-white ' >Recharge</h2>

                        </div>
                    </header>

                    {/* <div className="px-5 mt-12 ">

                        <div className="rounded-lg ">

                            <div className="bg-[#009fe9] flex relative justify-between p-5 rounded-lg rounded-bl-none">

                                <div className="">
                                    <div className="flex items-center space-x-1 mb-1" >
                                        <BiSolidCoinStack className='text-[yellow]' size={25} /> <span>My deposit</span>
                                    </div>
                                    <p className='text-black text-xl font-bold'>
                                        <em className=' p-0 px-[2px] border-0 not-italic leading-none '>₹</em>
                                        {userDetails?.recharge_amount.toFixed(2)}
                                    </p>
                                </div>

                                <img src={floatings} className='h-32 w-32 absolute right-0 -top-14' alt="" />

                            </div>

                            <div className="flex ">
                                <div className="flex-1 -z-10 bg-[#009fe9] rounded-xl rounded-t-none inverted_radius relative">

                                </div>
                                <Link to={'/deposit_records'} className="bg-[#009fe9] flex justify-center items-center rounded-lg border-2 mt-2 border-black px-5 py-2">
                                    Deposit record
                                </Link>
                            </div>
                        </div>

                        <div className="van-cell van-field input-box mt-7 bg-[#1e1e20]" data-v-380ab766="" style={{ background: '#1e1e20', border: 'none' }}>

                            <div className="van-field__left-icon">
                                <div className="phonen" data-v-380ab766="">
                                    <img src={indian} alt="" data-v-380ab766="" />
                                    <p data-v-380ab766="" className='mr-1'>₹</p>
                                    <span data-v-380ab766=""></span>
                                </div>
                            </div>

                            <div className="van-cell__value van-field__value flex-1 ">

                                <div className="van-field__body">

                                    <input
                                        onChange={e => { setDeposit(e.target.value); setSelected() }}
                                        type="number"
                                        inputMode="numeric"
                                        id="van-field-1-input"
                                        className="van-field__control inline-block font-bold"
                                        placeholder="Please enter deposit amount"
                                        style={{ color: 'white', fontWeight: 700 }}
                                        value={Deposit}
                                    />


                                </div>

                            </div>
                        </div>

                        <div className="flex flex-wrap items-center">

                            {amount.map((data, index) =>
                                <QuickAmountCard key={index} id={index} selected={selected} setSelected={setSelected} amount={data} setDeposit={setDeposit} />
                            )}

                        </div>

                        <div className="border border-[#6b6f78] w-full h-0 my-5"></div>

                        <div className="flex justify-between items-center space-x-3 text-[4vw]">
                            <button onClick={handleRecharge} className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-lg text-[#074762] font-bold'>Deposit</button>
                        </div>

                        <div className="mx-[10px] mt-5">

                            <p className='leading-6 text-sm text-[white] mb-[10px]'>
                                <strong>
                                    1. Please do not modify the deposit amount. Unauthorized modification of the deposit
                                    amount will result in the deposit not being credited
                                </strong>
                            </p>

                            <p className='leading-6 text-sm text-[white] mb-[10px]'>
                                2. Deposit received within 5 minutes, if not received within 5 minutes, please contact online
                                customer service for processing
                            </p>

                            <p className='leading-6 text-sm text-[white] mb-[10px]'>
                                3. Due to too many deposit users, please try multiple times to obtain the deposit link or try
                                again after a period of time
                            </p>

                        </div>
                    </div> */}

                    <div className="row mb-3">
                        <div className="w-full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-2 text-white">
                                        <div className="row">
                                            <div className="input-group mb-3">
                                                <button style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} className="btn btn-outline-primary text-white colorinput">₹</button>
                                                <input
                                                    onChange={e => { setDeposit(e.target.value); setSelected() }}
                                                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                                    name="amount"
                                                    id="amount"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="Input recharge amount"
                                                    type="number"
                                                    value={Deposit}
                                                />
                                            </div>
                                            <div className="row justify-content-between mt-3">
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction1()" className="btn btn-primary w-100">600 Rs</p>
                                                </div>
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction2()" className="btn btn-primary w-100">2900 Rs</p>
                                                </div>
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction3()" className="btn btn-primary w-100">7600 Rs</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-between mt-3">
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction4()" className="btn btn-primary w-100">15600 Rs</p>
                                                </div>
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction5()" className="btn btn-primary w-100">24600 Rs</p>
                                                </div>
                                                <div className="col-lg-4 col-4">
                                                    <p onclick="myFunction6()" className="btn btn-primary w-100">30000 Rs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Deposit