import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import CopyToClipboard from 'react-copy-to-clipboard';
import Navbar from './Navbar';
import { LiaAngleRightSolid } from 'react-icons/lia';
import teamImg from "../images/galaxysone/teamimg.jpg";
import one from "../images/galaxysone/1.png";
import two from "../images/galaxysone/2.png";
import three from "../images/galaxysone/3.png";
import { BiCoinStack } from 'react-icons/bi';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';

const Myteams = () => {

	const { userDetails, setUserDetails, user, toaster, vipimg, getUserDetails } = useContext(ContextApi);


	const [lvl1, setLvl1] = useState([])
	const [lvl2, setLvl2] = useState([])
	const [lvl3, setLvl3] = useState([])
	const [toogle, setToogle] = useState('lvl1')
	const [toogle2, setToogle2] = useState('valid')
	const [data, setData] = useState(lvl1.filter(e => e.plans_purchased.length !== 0))
	var totalProfit

	const getUserDetails2 = async () => {
		// const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
		await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
			setLvl1(data.level1);

		});
		await axios.post(`${BASE_URL}/lvl2`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
			setLvl2(data.level2);

		});
		await axios.post(`${BASE_URL}/lvl3`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
			setLvl3(data.level3);

		});

		// setUserDetails(details);
	}

	useEffect(() => {
		getUserDetails();
		getUserDetails2();

	}, [])

	const handelTooglle = (name) => {
		setToogle(name)
	}

	const handelTooglle2 = (name) => {
		setToogle2(name)
	}

	useEffect(() => {

		if (toogle === 'lvl1') {
			if (toogle2 === 'valid') {
				const data2 = lvl1.filter(e => e.plans_purchased.length !== 0)
				setData(data2)
			}
			else if (toogle2 === 'invalid') {
				const data2 = lvl1.filter(e => e.plans_purchased.length === 0)
				setData(data2)
			}
		}

		if (toogle === 'lvl2') {
			if (toogle2 === 'valid') {
				const data2 = lvl2.filter(e => e.plans_purchased.length !== 0)
				setData(data2)
			}
			else if (toogle2 === 'invalid') {
				const data2 = lvl2.filter(e => e.plans_purchased.length === 0)
				setData(data2)
			}
		}

		if (toogle === 'lvl3') {
			if (toogle2 === 'valid') {
				const data2 = lvl3.filter(e => e.plans_purchased.length !== 0)
				setData(data2)
			}
			else if (toogle2 === 'invalid') {
				const data2 = lvl3.filter(e => e.plans_purchased.length === 0)
				setData(data2)
			}
		}

		console.log(data);


	}, [toogle, setToogle, toogle2, setToogle2])

	useEffect(() => {
		const data2 = lvl1.filter(e => e.plans_purchased.length !== 0)
		setData(data2)
	}, [lvl1, setLvl1])



	return (
		<>
			<div className="  after:contents-[' '] after:fixed h-screen mb-5 px-5">
				<div className="w-full mx-auto max-w-[800px]">

					<header className="h-[50px] leading-[50px] block mb-[10px]">
						<div className=" max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center justify-between p-4 ">

							<Link to={'/account'} className="w-[60px] h-[50px] text-center text-white z-[2] flex justify-center items-center ">
								<HiMiniArrowLongLeft size={22} /> <span className='text-lg'>Back</span>
							</Link>

							<h2 className=' text-center text-lg font-medium z-[1] text-white ' >My Team</h2>

						</div>
					</header>

					<section className="mt-12">
						<div className="row">
							<div className="w-full">
								<div className="customborder p-2">
									<div>
										<div className="flex justify-between items-center mb-0 pb-0">
											<p className="text-white mb-4"> Team Profit </p>
											<span className="text-white">₹ {(Number(userDetails?.directRecharge + userDetails?.indirectRecharge + userDetails?.in_indirectRecharge)).toFixed(2)}</span>
										</div>
										<div className="flex justify-between items-center" style={{ borderBottom: "1px dotted blue" }}>
											<span className="text-white">Valid Team Size</span>
											<span className="text-white">{userDetails?.directMember.length + userDetails?.indirectMember.length + userDetails?.in_indirectMember.length} People</span>
										</div>
										<div className="row">
											<table className="table-responsive border-0 text-center text-white" style={{ marginTop: '12px' }}>
												<tbody>
													<tr>
														<th>₹ 0.00</th>

														<th>₹ 0.00</th>
													</tr>
													<tr>
														<td>Total Recharge Amount</td>

														<td>Today Recharge Amount</td>
													</tr>
												</tbody></table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-3">
						<div className="row">
							<div className="w-full">

								<div className="tab">
									<div className="row">
										<div className="w-full">
											<ul className="nav nav-tabs" role="tablist">

												<li className="nav-item">
													<a onClick={() => handelTooglle('lvl1')} className={`nav-link ${toogle === 'lvl1' && 'active'} text-white`} >Team-B(1)</a>
												</li>
												<li className="nav-item">
													<a onClick={() => handelTooglle('lvl2')} className={`nav-link ${toogle === 'lvl2' && 'active'} text-white`}  >Team-C(0)</a>
												</li>
												<li className="nav-item">
													<a onClick={() => handelTooglle('lvl3')} className={`nav-link ${toogle === 'lvl3' && 'active'} text-white`} >Team-D(0)</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="row">
										<div className="w-full">
											<div className="tab-content ">

												<div className="tab-pane active " id="tab-1" role="tabpanel">
													<div className="row justify-between" style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

														<div className="flex justify-between">
															<div className="w-1/2 flex-[0_0_auto] p-5">
																<a onClick={() => setToogle2('valid')} className={`btn btn-outline-primary w-full ${toogle2 === 'valid' && 'text-white bg-[#3b7ddd] border-[#3b7ddd] shadow-[0_0_0_0.2rem_rgba(59,125,221,0.5)]'}`}>Valid</a>
															</div>
															<div className="w-1/2 flex-[0_0_auto] p-5">
																<a onClick={() => setToogle2('invalid')} className={`btn btn-outline-primary w-full ${toogle2 === 'invalid' && 'text-white bg-[#3b7ddd] border-[#3b7ddd] shadow-[0_0_0_0.2rem_rgba(59,125,221,0.5)]'}`} >InValid</a>
															</div>
														</div>
													</div>

													{data.map((element, index) =>
														<section key={index} className="tab-pane active mt-5" id="invalidlevel1">
															<div className="row">
																<div className="col-12">
																	<div className="customborder p-2">
																		<div>
																			<div className="flex justify-between items-center mb-0 pb-0">
																				<p className="text-white textsizeall"> {element.mobno} </p>
																				<span className="text-white">₹
																					{
																						element.plans_purchased.reduce(function (max, obj) {
																							return obj.plan_amount > max.plan_amount ? obj : max;
																						}, element.plans_purchased[0]).plan_amount
																					}
																				</span>
																			</div>
																			<div className="flex justify-between items-center mt-0 pt-0">
																				<span className="text-white textsizeall" > 12/15/2023 </span>
																				<span className="text-white" >Max Price Device</span>
																			</div>
																			<hr />
																		</div>
																	</div>
																</div>
															</div>
														</section>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

		</>
	)
}

export default Myteams