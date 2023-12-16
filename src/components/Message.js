import React from 'react'
import noMessage from "../images/noMessage.svg";
import { Link } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';

const Message = () => {

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

                                <h2 className=' text-center text-lg font-medium z-[1] text-white ' >FAQ</h2>

                            </div>
                        </header>

                    </div>

                    <div className="row mb-3">
                        <div className="w-full">
                            <div className="p-2 customborder">
                                <div className="">
                                    <div className="p-2 text-white">
                                        <div className="row">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header bg-primary" id="headingOne ">
                                                        <button className="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            1. Introduction of BIT Mining
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse bg-primary collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                                        <div className="accordion-body">
                                                            BIT Mining firmly believes that High Performance Computing (HPC) will bring unprecedented potential and opportunities for R&amp;D, business and even human progress. We are rapidly establishing a global leadership position in GPU and ASIC-based solutions by designing and operating ultra-efficient green HPC infrastructure.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            2. What are the advantages of the company?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse bg-primary collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                                                        <div className="accordion-body">
                                                            We are the pioneers in Bitcoin mining. Hands-on market experience and expertise have never been more important for being at the cutting edge of a mature industry. Our heritage dates back to the early days of digital asset mining. We continually strive to find new efficiencies in the latest hardware, high-quality infrastructure and leading software technologies - delivering long-term value to our investors while managing our risk and operating sustainably.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button bg-primary text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            3. How to mine Bitcoin?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse bg-primary collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                                                        <div className="accordion-body">
                                                            Our mission is to continue to expand and secure the Bitcoin network. We use the latest hardware and innovative infrastructure technologies to deliver industry-leading operational and energy efficiency. We specialize in self-discovery, whether on a website we own and operate, or through third-party hosting.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                            4. How about mining performance?
                                                        </button>
                                                    </h2>
                                                    <div id="collapse4" className="accordion-collapse collapse bg-primary" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            We are ushering in a new era of data center environments, delivering optimized performance, efficiency and availability to data-intensive organizations in the most sustainable manner.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                            5. Where are your mines divided into?
                                                        </button>
                                                    </h2>
                                                    <div id="collapse5" className="accordion-collapse collapse bg-primary" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            Our mines are distributed in Georgia, North Dakota, New York, Quebec, California, Boden, Sweden, and Levdal, Norway. By July 2023, we have deployed many mines in Europe, the United States, and Asia. Power bills and cooling are extremely important, and we utilize state-of-the-art infrastructure to ensure the environmental footprint of our computationally intensive processes is as small as possible. From the remote locations of our data centers, to the renewable energy and waste reduction solutions they use, we're taking sustainability to the next level.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                            6. What does the cost of mining machine operation include?
                                                        </button>
                                                    </h2>
                                                    <div id="collapse6" className="accordion-collapse collapse bg-primary" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            Electricity expenses,Refrigeration,Maintenance work and baby sitting program.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                            7. When will I receive my proceeds??
                                                        </button>
                                                    </h2>
                                                    <div id="collapse7" className="accordion-collapse collapse bg-primary" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            Daily mining usually starts at 00:00 UTC and ends at 23:59:59 UTC. Therefore, the time between outputs can sometimes be greater than 24 hours or less than 24 hours. In any case, you will definitely receive daily mining output.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item bg-primary">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                            8. The vision of the company
                                                        </button>
                                                    </h2>
                                                    <div id="collapse8" className="accordion-collapse collapse bg-primary" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            Success can only be sustained if you commit to and participate in the sustainable development process. The ultimate goal is to meet the needs of the present without compromising the ability of future generations to meet their own needs.
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



                </div>
            </div>

        </>
    )
}

export default Message