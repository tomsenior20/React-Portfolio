import React from 'react';
import { Helmet } from 'react-helmet'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import '../static/contact.css'

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <div className="pageWelcomeContainer mt-[100px] min-h-[500px] md:flex-row flex-col p-3 flex w-full items-center justify-center">
                <div className="text-center">
                    <h1 className="PageWelcomeHeader text-white text-5xl ">Contact Me Page</h1>
                </div>
            </div>
            <div className="socialMediaLinksContainer flex flex-col md:flex-row p-3 my-10 md:my-[5rem] w-[100%] justify-center">
                <div className="socialMediaHeader rounded-md text-center w-[90%] h-[100px] md:h-[200px] my-3 md:my-8 flex justify-center items-center w-full md:w-[40%]">
                    <p className="socialMediaText text-white text-center text-4xl">Social Media</p>
                </div>
                <div className="socialArrowBeteen flex justify-center items-center h-[100px] md:h-[200px] my-3 md:my-8 w-[90%] md:w-[10%]">
                    <AiOutlineArrowRight className="text-center  w-[40px] h-[40px] text-white hidden md:flex" />
                    <AiOutlineArrowDown className="text-center  w-[40px] h-[100%] text-white flex md:hidden" />
                </div>
                <div className="socialMediaLinks flex rounded-md flex-row items-center justify-around w-[90%] h-[100px] md:h-[200px] my-3 md:my-8 md:w-[40%]">
                    <a href="https://www.linkedin.com/in/tom-senior20/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="socialIcons w-[60px] h-[60px] text-white" />
                    </a>
                    <a href="https://github.com/tomsenior20" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="socialIcons w-[60px] h-[60px] text-white" />
                    </a>
                </div>
            </div>
        </>
    )
};
