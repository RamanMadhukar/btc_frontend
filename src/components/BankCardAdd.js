import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import bankaccountimg from '../images/galaxysone/bankaccountimg.png'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';

const BankCardAdd = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, setLoading } = useContext(ContextApi);

    const [details, setDetails] = useState(
        {
            fullName: '',
            bankAccount: '',
            ifsc: '',
            bankName: ''
        }
    );
    const [pop, setpop] = useState(false);
    const [wpwd, setWpwd] = useState()
    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');


    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
        // console.log(details);
    }

    const handleSubmit = async () => {

        if (details.fullName.length === 0) {
            toaster('Name cannot be empty')
            return
        }

        if (details.bankAccount.length === 0) {
            toaster('Bank account number cannot be empty')
            return
        }

        if (details.ifsc.length===0) {
            toaster('IFSC code cannot be empty')
            return
        }
        
        if (details.bankName.length===0) {
            toaster('Bank name cannot be empty')
            return
        }

        setLoading(true)
        await axios.post(`${BASE_URL}/bank_details`, { user_id: localStorage.getItem('uid'), bank_details: details })
            .then(() => {
                setLoading(false)
                toaster('Account has been added');
                navigate('/bankcard')
            })
            .catch(() => { setLoading(false); toaster('Some error Occured') }
            );

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



            <div className="after:bg-white after:contents-[' '] after:fixed p-5">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px]">
                        <div className=" max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center justify-between p-4 ">

                            <Link to={'/account'} className="w-[60px] h-[50px] text-center text-white z-[2] flex justify-center items-center ">
                                <HiMiniArrowLongLeft size={22} /> <span className='text-lg'>Back</span>
                            </Link>

                            <h2 className=' text-center text-lg font-medium z-[1] text-white ' >Edit bank account</h2>

                        </div>
                    </header>

                    <div className="row mb-3">
                        <div className="w-full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-2 text-white">
                                        <div className="row">
                                            <div className="input-group mb-3">
                                                <input
                                                    onChange={handleChange}
                                                    type='text'
                                                    name='fullName'
                                                    id="AccountHolderName"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="Name"

                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="Bank Name"
                                                    id="BankName"
                                                    name="bankName"
                                                    onChange={handleChange}

                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="IFSC" aria-label="Recipient's username"
                                                    id="BankCode"
                                                    name="ifsc"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="Account" aria-label="Recipient's username"
                                                    id="AccountNumber"
                                                    name="bankAccount"
                                                    onChange={(e) => { handleChange(e); setOTPfield(String(Math.floor(100000 + Math.random() * 900000))) }}

                                                />
                                            </div>
                                            {/* <div className="input-group mb-3">

                                                <input onChange={(e) => setOtp(e.target.value)} style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }} type="text" name="enterOpt" className="form-control p-3 colorinput" placeholder="Please input otp code" />
                                                <button style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0, marginLeft: '-1px ' }} className="btn btn-outline-primary text-white colorinput" type="button" id="getOtpButton">Get OTP</button>
                                            </div> */}
                                            <div className="mb-2 text-center">
                                                <button onClick={handleSubmit} style={{ fontSize: '.75rem', padding: '0.15rem 0.5rem', borderRadius: '5px' }} className="btn-primary btn-lg fw-bold mx-auto d-block btn-sm">Save bank account</button>
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

export default BankCardAdd