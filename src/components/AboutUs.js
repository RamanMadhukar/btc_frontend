import React, { useEffect, useRef, useState } from 'react'
import aboutusimg from "../images/galaxysone/aboutusimg.jpg";
import { Link } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import Navbar from './Navbar';
import YouTube from 'react-youtube';

const AboutUs = () => {

    const ref = useRef('');

    const [dim, setdim] = useState([])

    useEffect(() => {
        window.onresize = () => {
            if (ref.current === null)
                return;
            var newDim = [ref.current?.offsetWidth, ref.current?.innerHeight]
            setdim(newDim)
        }
        var newDim = [ref.current?.offsetWidth, ref.current?.innerHeight]
        setdim(newDim)
    }, [])


    return (
        <>

            <Navbar />


            <div className="px-3 mt-1 flex-col mb-20" style={{ width: '100vw' }}>
                <div className="mb-5 mt-3">

                    <h4 class="text-center text-white mb-5">About</h4>

                    <div className="row ">
                        <div className="col-span-12">
                            <div className="p-3 customborder  rounded-sm ">

                                <div ref={ref} className="">
                                    <iframe width={dim[0]} height={dim[1]} src="https://www.youtube.com/embed/OYZcFrYfl1I?si=we2w9Apu30jBROsc&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>

                                <h3 class="text-center text-white mt-4 mb-5 ">Dnex</h3>

                                <p className='text-white'>
                                    We are a Global Semiconductor Foundry
                                    <br />
                                    We are continuously innovating to bring leading-edge semiconductor solutions that will transform the world
                                    <br /><br />

                                    Globally ranked 17th by IC Insights in the category of pure-play foundries in 2021, SilTerra strives to provide outstanding technologies and services to our customers.
                                    <br /><br />



                                    Our leadership in advanced semiconductor wafer processing sets the stage to bring transformation in consumer electronics, next generation data communications networks, industrial, medical technologies and mobility.
                                    <br /><br />



                                    SilTerra is a strategic investment of Dagang NeXchange Berhad (“DNeX”) and Beijing Integrated Circuit Advanced Manufacturing and High-End Equity Investment Fund Center (Limited Partnership) (“CGP Fund”).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutUs