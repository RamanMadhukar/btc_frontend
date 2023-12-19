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

	const { userDetails, setUserDetails, user, toaster, vipimg } = useContext(ContextApi);


	const [lvl1, setLvl1] = useState([])
	const [lvl2, setLvl2] = useState([])
	const [lvl3, setLvl3] = useState([])
	const [toogle, setToogle] = useState('lvl1')

	const getUserDetails = async () => {
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

	}, [])

	const handelTooglle = (name) => {
		setToogle(name)
	}

	// console.log(typeof userDetails);

	useEffect(() => {
		
	}, [])


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
											<p className="text-white mb-4"> Team Profite </p>
											<span className="text-white">₹ 0.00</span>
										</div>
										<div className="flex justify-between items-center" style={{ borderBottom: "1px dotted blue" }}>
											<span className="text-white">Valid Team Size</span>
											<span className="text-white">0 People</span>
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
													<a className="nav-link active text-white" href="#tab-1" data-bs-toggle="tab" role="tab" >Team-B(1)</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white" href="#tab-2" data-bs-toggle="tab" role="tab" >Team-C(0)</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white" href="#tab-3" data-bs-toggle="tab" role="tab" >Team-D(0)</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="tab-content ">

												<div className="tab-pane active " id="tab-1" role="tabpanel">
													<div className="row justify-content-between">
														<div className="col-lg-6 col-6">
															<a className="btn btn-outline-primary w-100" href="#" id="validButtonlevel1">Valid</a>
														</div>
														<div className="col-lg-6 col-6">
															<a href="#" className="btn btn-outline-primary  w-100" id="invalidButtonlevel1">InValid</a>
														</div>
													</div>
													<section className="tab-pane active mt-5" id="validlevel1" >
														<div className="row">
															<div className="col-12">

																<div className="customborder p-2">
																	<div>
																	</div>
																</div>

															</div>
														</div>
													</section>
													<section className="tab-pane active mt-5" id="invalidlevel1">
														<div className="row">
															<div className="col-12">

																<div className="customborder p-2">
																	<div>
																		<div className="d-flex justify-content-between align-items-center mb-0 pb-0">
																			<p className="text-white textsizeall"> 6394856706 </p>
																			<span className="text-white">₹ 0.00</span>
																		</div>
																		<div className="d-flex justify-content-between align-items-center mt-0 pt-0">
																			<span className="text-white textsizeall" > 12/15/2023 </span>
																			<span className="text-white" >Max Price Device</span>
																		</div>
																		<hr />
																	</div>
																</div>

															</div>
														</div>
													</section>
												</div>
												<div className="tab-pane" id="tab-2" role="tabpanel">
													<div className="row justify-content-between">
														<div className="col-lg-6 col-6">
															<a href="#" className="btn btn-outline-primary w-100" id="validButtonlevel2">Valid</a>
														</div>
														<div className="col-lg-6 col-6">
															<a href="#" className="btn btn-outline-primary  w-100" id="invalidButtonlevel2">InValid</a>
														</div>
													</div>
													<section className="tab-pane active mt-5" id="validlevel2">
														<div className="row mb-3">
															<div className="col-12">
																<div className="customborder p-2">
																	<div>
																	</div>
																</div>
															</div>
														</div>
													</section>
													<section className="tab-pane active mt-5" id="invalidlevel2" >
														<div className="row mb-3">
															<div className="col-12">
																<div className="customborder p-2">
																	<div>
																	</div>
																</div>
															</div>
														</div>
													</section>
												</div>
												<div className="tab-pane" id="tab-3" role="tabpanel">
													<div className="row justify-content-between">
														<div className="col-lg-6 col-6">
															<a href="#" className="btn btn-outline-primary w-100" id="validButtonlevel3">Valid</a>
														</div>
														<div className="col-lg-6 col-6">
															<a href="#" className="btn btn-outline-primary  w-100" id="invalidButtonlevel3">InValid</a>
														</div>
													</div>
													<section className="tab-pane active mt-5" id="validlevel3">
														<div className="row mb-3">
															<div className="col-12">
																<div className="customborder p-2">
																	<div>
																	</div>
																</div>
															</div>
														</div>
													</section>
													<section className="tab-pane active mt-5" id="invalidlevel3" >
														<div className="row mb-3">
															<div className="col-12">
																<div className="customborder p-2">
																	<div>
																	</div>
																</div>
															</div>
														</div>
													</section>
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