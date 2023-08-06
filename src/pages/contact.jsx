import React from 'react';
import { Helmet } from 'react-helmet'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <div className="pageWelcomeContainer mt-[100px] min-h-[500px] p-3 flex items-center justify-center">
                <div>
                    <h1 className="PageWelcomeHeader text-white text-5xl ">Contact Me Page</h1>
                </div>
            </div>
            <div className="socialMediaLinksContainer flex flex-col my-5 md:flex-row justify-around">
                <div className="socialMediaHeader text-center p-8 my-8 w-full md:w-[50%]">
                    <p className="text-white text-3xl p-4">Social Media Places</p>
                </div>
                <div className="socialMediaLinks flex flex-row items-center justify-evenly w-full my-8 md:w-[50%]">
                    <FaLinkedin className="w-[60px] h-[60px] text-white" />
                    <FaGithub className="w-[60px] h-[60px] text-white" />
                </div>
            </div>
        </>
    )
};
