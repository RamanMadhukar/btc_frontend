import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import BASE_URL from '../api_url';
import { ContextApi } from '../App';
// import logo from '../images/logo (1).svg'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
// import applogo from '../images/appLogo.png'
// import tradelogo from '../images/logo_g.svg'
// import Tradmark from './Tradmark';
import logo from '../images/galaxysone/logo.jpg'
import imgriti from '../images/galaxysone/imgriti.png'
import phone from '../images/galaxysone/phone.png'
import sms from '../images/btc/verify.png'
import indian from '../images/galaxysone/indianFlag.png'
import password from '../images/btc/lock.png'
import eyeclosed from '../images/btc/eyeclosed.png'
import eyeopened from '../images/btc/eyeopend.png'
// import ReCAPTCHA from "react-google-recaptcha";
import RCG from 'react-captcha-generator';
import loginimg from '../images/btc/login.png'
import phoneimg from '../images/btc/phone.png'

const Login = () => {

    const navigate = useNavigate();

    const {
        setLoading,
        toaster,
        setUser
    } = useContext(ContextApi);

    const [mobno, setmobno] = useState('');
    const [pwd, setpwd] = useState('');
    const [bloackedUsers, setBlockedUsers] = useState([]);
    const [loginpwd, setLoginpwd] = useState('password')
    const [loginpwd2, setLoginpwd2] = useState('password')

    const getBlockedUsers = async () => {
        const dataRes = await axios.get(`${BASE_URL}/get_blocked_users`).then(res => res.data);
        var temp = [];
        dataRes.forEach((doc) => {
            //console.log(doc.data());
            temp.push(doc.user_id);
            setBlockedUsers(temp);
        });
    }

    const handleSignIn = async () => {
        if (bloackedUsers.includes(String(mobno))) {
            toaster('You are blocked by the administrator!');
            return;
        }
        setLoading(true);

        await axios.post(`${BASE_URL}/login`, { mobno, pwd })
            .then(({ data }) => {
                if (data.user_details === null) {
                    throw "Could not login/something went wrong";
                }
                localStorage.setItem('uid', data.user_details._id);
                setUser(data.user_details._id)
                setTimeout(() => {
                    navigate('/home');
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                    toaster("Some thing went wrong")
                }, 1000);
            });
    }

    useEffect(() => {
        getBlockedUsers();
    }, [])

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


    return (
        <>

            <div className="text-base en h-screen w-screen overflow-hidden bg-[#ffeee4] px-5">

                <div className="isPc h-full flex flex-col w-full text-[#2c3e50] overflow-hidden">

                    <div className="van_nav_pd hidden"></div>

                    <div className="login">

                        <div className="login-head flex items-center justify-between">

                            <div className="l-left">

                                <div className="l-title font-bold text-[#333333] text-3xl">Hello!</div>

                                <div className="l-desc text-[10px] font-semibold whitespace-nowrap text-[#666]">Welcome to the waho!</div>

                            </div>

                            <div className="l-right">

                                <img className='h-full max-h-72 relative -top-14' src={loginimg} alt="" />

                            </div>

                        </div>

                        <div className="content relative z-[1] ">

                            <div className="lg-t text-lg font-bold">Welcome back</div>

                            <div className="sign_login sign_login2 relative z-[2] mt-4">

                                <div className="uilist bg-transparent rounded-lg overflow-hidden">

                                    <div className="uilist_div account h-8 px-3 flex items-center bg-[#f6f6f6] mb-4 backdrop-blur-sm hello rounded-full">

                                        <img className='w-[19px]' src={phoneimg} alt="" />

                                        <span className="pre text-xs ml-1 font-medium ">+91</span>

                                        <input
                                            onChange={e => { setmobno(e.target.value) }}
                                            type="tel"
                                            placeholder="Phone Number"
                                            name="pattern"
                                            maxlength="10"
                                            className='bg-transparent border-transparent outline-none text-xs text-black pl-[10px] flex-grow'

                                        />

                                    </div>

                                    <div className="uilist_div account h-8 px-3 flex items-center bg-[#f6f6f6] mb-4 backdrop-blur-sm hello rounded-full">

                                        <img className='w-[19px]' src={password} alt="" />

                                        <input
                                            onChange={e => setpwd(e.target.value)}
                                            type={loginpwd}
                                            placeholder="Password"
                                            name="pattern"
                                            maxlength="10"
                                            className='bg-transparent border-transparent outline-none text-xs text-black pl-[10px] flex-grow'

                                        />

                                        <div onClick={() => secrethandel('loginpwd')} className="">
                                            {loginpwd === 'password' ?
                                                <img className="eyeimg w-3" src={eyeclosed} alt="" data-v-380ab766="" />
                                                :
                                                <img className="eyeimg w-3" src={eyeopened} alt="" data-v-380ab766="" />
                                            }
                                        </div>

                                    </div>

                                </div>

                                <p className="btn text-center mt-[14px]">

                                    <button onClick={handleSignIn} className='inline-block w-11/12 leading-3 rounded-full h-9 text-white text-center font-bold px-5' >login in</button>

                                </p>

                                <p className="register_btn mt-8 mb-3 " >
                                    <Link to={'/forgotpassword'} >Forgot Password?</Link>
                                </p>

                            </div>
                        </div>

                        <div className='text-center'>
                            <p class="footer">
                                <Link to={'/signup'} data-v-59be2268="">Creat Account</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login