import React, { useContext } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import v0 from '../images/v0.png'
import v01 from '../images/v01.png'
import v1 from '../images/v1.png'
import v2 from '../images/v2.png'
import v3 from '../images/v3.png'
import v4 from '../images/v4.png'
import v5 from '../images/v5.png'
import v6 from '../images/v6.png'
import v7 from '../images/v7.png'
import v8 from '../images/v8.png'
import { ContextApi } from '../App'
import { HiMiniArrowLongLeft } from 'react-icons/hi2'

const Vip = () => {

    const { vipimg, setVipimg } = useContext(ContextApi);

    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user } = useContext(ContextApi);


    return (
        <>
            <div className="mx-auto bgimg  px-5">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div className='mb-5'>

                        <header className="h-[50px] leading-[50px] block mb-[10px]">
                            <div className=" max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto z-[9999] flex flex-wrap items-center justify-between p-4 ">

                                <Link to={'/account'} className="w-[60px] h-[50px] text-center text-white z-[2] flex justify-center items-center ">
                                    <HiMiniArrowLongLeft size={22} /> <span className='text-lg'>Back</span>
                                </Link>

                                <h2 className=' text-center text-lg font-medium z-[1] text-white ' >Vip Upgrade</h2>

                            </div>
                        </header>

                    </div>

                    <div className="row">

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 2</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>1500Rs</td>
                                                                <td>5</td>
                                                                <td>200Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 3</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>10000Rs</td>
                                                                <td>15</td>
                                                                <td>400Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 4</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>30000Rs</td>
                                                                <td>40</td>
                                                                <td>800Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 5</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>150000Rs</td>
                                                                <td>150</td>
                                                                <td>2000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 6</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>500000Rs</td>
                                                                <td>500</td>
                                                                <td>10000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 7</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>1000000Rs</td>
                                                                <td>1500</td>
                                                                <td>20000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 8</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>1500000Rs</td>
                                                                <td>3000</td>
                                                                <td>80000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 9</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>2000000Rs</td>
                                                                <td>5000</td>
                                                                <td>200000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full">
                            <div className="tab-content ">

                                <div className="tab-pane active " id="tab-1" role="tabpanel">

                                    <div className="row mb-3 pt-3">

                                        <div className="w-full">

                                            <div className="p-2 customborder">
                                                <div className=" mt-2">
                                                    <h6 className="text-white text-center">Lavel 10</h6>
                                                </div>
                                                <div className="row table-responsive text-white text-center mt-3" style={{ overflow: 'hidden', boxShadow: '2px 1px 15px -4px #000000', borderRadius: '100px' }}>
                                                    <table style={{overflow:'hidden'}}>
                                                        <tbody><tr>
                                                            <th>Invest</th>
                                                            <th>Team</th>
                                                            <th>Rewards</th>
                                                        </tr>
                                                            <tr style={{fontSize:'10px'}}>
                                                                <td>3000000Rs</td>
                                                                <td>8000</td>
                                                                <td>500000Rs</td>
                                                            </tr>
                                                        </tbody></table>

                                                </div>
                                                    <div className=" mt-3">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "0.00%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-2">
                                                        <button  className="btn btn-primary btn-sm w-full disabled">Go It</button>
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

export default Vip