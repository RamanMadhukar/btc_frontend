import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import chip from '../images/Chip.svg'
import BASE_URL from '../api_url';
import axios from 'axios';
import { BiSolidCoinStack } from 'react-icons/bi';
import floatings from '../images/galaxysone/g2.png'
import eyeclosed from '../images/galaxysone/eyeclosed.png'
import eyeopened from '../images/galaxysone/eyeopened.png'
import sms from '../images/galaxysone/sms.png'
import { HiMiniArrowLongLeft } from 'react-icons/hi2';

const Widthdrawl = () => {

    const navigate = useNavigate();


    const { userDetails, setLoading, setUserDetails, getUserDetails, user, toaster, amounts, setAmounsts } = useContext(ContextApi);
    const [loginpwd, setLoginpwd] = useState('password')
    const [loginpwd2, setLoginpwd2] = useState('password')
    const [nextBtn, setnextBtn] = useState(false)
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');


    // console.log(amounts);

    // const [bank_details, setBank_details] = useState(
    //     {
    //         fullName: '',
    //         bankAccount: '',
    //         ifsc: '',
    //     }
    // )
    const [bank_details, setBank_details] = useState(userDetails?.bank_details)

    const [deposit, setDeposit] = useState()
    const [wpwd, setWpwd] = useState()
    const [wpwd2, setWpwd2] = useState(localStorage.getItem('wpwd'))

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    const withdrawDate = new Date(userDetails?.lastWithdrawal)
    withdrawDate.setHours(0, 0, 0, 0)

    const isBetween = () => {
        var startTime = '09:00:00';
        var endTime = '21:00:00';

        var currentDate = new Date()

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);


        var valid = startDate < currentDate && endDate > currentDate;
        //console.log(valid);
        return valid;
    }

    const handleWithdrawal = async () => {

        setnextBtn(true)

        if (userDetails?.vipLevel === 0) {
            toaster('Atleast buy one plan to withdraw');
            return;
        }

        // if (otp !== otpfield) {
        //     toaster('Wrong otp');
        //     setnextBtn(false)
        //     return;
        // }

        if (Number(deposit) === false || Number(deposit) <= 0) {
            toaster('Enter a valid number');
            setnextBtn(false)
            return;
        }

        if ((Number(deposit)) < Number(amounts.mwamount)) {
            //console.log((Number(deposit)+Number(amounts.withdrawal_fee)), Number(amounts.mwamount));
            toaster(`Amount should be greater than ${amounts.mwamount}`);
            //console.log(deposit, amounts.amount);
            setnextBtn(false)
            return;
        }

        if (withdrawDate.toDateString() === date.toDateString()) {
            toaster('you can withdraw once in a day.')
            setnextBtn(false)
            return
        }

        if ((Number(deposit) > 50000)) {
            toaster('Amount should not be greatr than Rs 50,000');
            setnextBtn(false)
            return;
        }

        if (((Number(deposit)) > Number(userDetails.balance))) {
            toaster('You dont have enough balance');
            setnextBtn(false)
            return;
        }
        //&& otp === otpfield
        if (true) {
            try {
                //const docRef1 = 
                var temp_details = bank_details;
                delete temp_details._id;

                setLoading(true)

                await axios.post(`${BASE_URL}/place_withdrawal`, {
                    withdrawalAmount: (Number(deposit)),
                    ...temp_details,
                    afterDeduction: (Number(deposit) - (Number(amounts.withdrawal_fee) * Number(deposit) / 100)),
                    user_id: localStorage.getItem('uid'),
                    time: new Date(),
                    balance: userDetails.balance,
                    status: 'pending'
                }).then(() => {
                    setLoading(false)
                    toaster('Withdrawal request placed successfully!');
                    setOTPfield('')
                    setOtp('')
                    setTimeout(() => {
                        navigate('/widthdrawlrecords')
                    }, 3000);
                }).catch(e => {
                    setLoading(false)
                    toaster("some error occured")
                    console.log(e);
                })

            } catch (e) {
                setLoading(false)
                toaster('error adding document')
                console.error("Error adding document: ", e);

            }
        } else {
            setLoading(false)
            toaster('Trade Password is incorrect');
            //console.log(wpassword, loc.state.withdrawalPassword);
        }

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

    useEffect(() => {
        // console.log(wpwd2);

        // if (wpwd2 === 'undefined') {
        //     toaster('Set Trade Password')
        //     setTimeout(() => {
        //         navigate('/accountsecurity', { state: "pin  " })
        //     }, 3000);
        // }

        if (userDetails?.bank_details.bankAccount.length === 0) {
            toaster("Add bank details first")
            setTimeout(() => {
                navigate('/bankcardadd')
            }, 3000);
        }
    }, [])


    // console.log(bank_details,'withdrawl');


    console.log();

    const secrethandel = type => {

        console.log(type);

        if (type === 'loginpwd') {
            if (loginpwd === 'password') {
                setLoginpwd('text')
            }
            else {
                setLoginpwd('password')
            }
        }
        else if (type === 'loginpwd2') {
            if (loginpwd2 === 'password') {
                setLoginpwd2('text')
            }
            else {
                setLoginpwd2('password')
            }
        }
    }

    const handleMessage = () => {

        if (deposit === 0) {
            toaster('Deposite cannot be 0');
            return;
        }

        fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=nei0bPwRvpzKaX362T718yGVN5ICgskMEmfdUxOBYWLhrZH9cSyZHdTi1PEt7cl0LwroKYCS89x6kApQ&variables_values=${otpfield}&route=otp&numbers=${userDetails?.mobno}`)
            .then((response) => {
                console.log(response);
                setSeconds(59)
                toaster('OTP sent successfully');
            })
            .catch(error => toaster('Something went wrong'));
        console.log(otpfield, "otpfield");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);




    return (
        <>
            <div className=" after:contents-[' '] after:fixed p-5">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px]">
                        <div className=" max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center justify-between p-4 ">

                            <Link to={'/account'} className="w-[60px] h-[50px] text-center text-white z-[2] flex justify-center items-center ">
                                <HiMiniArrowLongLeft size={22} /> <span className='text-lg'>Back</span>
                            </Link>

                            <h2 className=' text-center text-lg font-medium z-[1] text-white ' >Withdrawal</h2>

                        </div>
                    </header>

                    <div className="row mb-3 mt-3">
                        <div className="w-full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-5 text-white">
                                        <div className="row">
                                            <h6 className="text-center mb-2" style={{ color: 'red' }}>
                                                ₹ {userDetails?.balance?.toFixed(2)}
                                            </h6>
                                            <p className="text-center text-white mb-4">Balance ( INR ) </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 mt-3">
                        <div className="full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-2 text-white">
                                        <div className="row">
                                            <div className="input-group mb-3">
                                                <button style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} className="btn btn-outline-primary text-white colorinput">Amount</button>
                                                <input
                                                    onChange={e => setDeposit(e.target.value)}
                                                    type="text"
                                                    name="amount"
                                                    id="amount"
                                                    className="form-control p-3 colorinput"
                                                    placeholder="Input withdrawal amount"
                                                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                                />
                                            </div>
                                            <h6 className="text-white">Withdrawal bank account</h6>
                                            <hr className="text-center" />
                                            <p className="text-white mb-4">Acccount name: &nbsp; Pk</p>
                                            <p className="text-white mb-4">Bank name:  &nbsp; Pk</p>
                                            <p className="text-white mb-4">IFSC:  &nbsp; Airo </p>
                                            <p className="text-white mb-4">Bank account:  &nbsp; 8009072885</p>
                                            <div className="text-center mb-3">
                                                {isBetween() ?
                                                    <button disabled={nextBtn} onClick={handleWithdrawal} style={{ fontSize: '.75rem', padding: '0.15rem 0.5rem', borderRadius: '5px' }} className="btn btn-primary w-fit" >Withdrawal</button>
                                                    :
                                                    <button onClick={() => { toaster('You can withdraw only between 09:00:00 to 21:00:00 ') }} style={{ fontSize: '.75rem', padding: '0.15rem 0.5rem', borderRadius: '5px' }} className="btn btn-primary w-fit" >Withdrawal</button>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 mt-3">
                        <div className="w-full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-2 text-white">
                                        <div className="row p-3">
                                            <h6 className="text-white mb-2 px-3 text-sm">Tips</h6>
                                            <ol className="text-white text-sm">
                                                <li>1. Minimum withdrawal amount is <span className="text-[red]">INR 130</span></li>
                                                <li>2. Personal income tax is <span className="text-[red]">INR 5 %</span></li>
                                                <li>3. Withdrawal time is 12 hours to 72 hours..</li>

                                            </ol>
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

export default Widthdrawl