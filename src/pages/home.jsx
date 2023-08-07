import React from 'react';
import { Helmet } from 'react-helmet'
import '../static/home.css'
import MeLogo from '../static/me.jpeg'

export default function Home(params) {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="mt-[150px] p-9 h-[650px] flex justify-center items-center min-h-[550px]">
                <h1 className="homeIntroductionTitle text-white text-5xl md:text-7xl text-center p-2">Welcome to My Portfolio</h1>
            </div>
            <div className="descriptionContainer flex flex-col md:flex-row p-10 mt-[2rem] min-h[550px] flex justify-center items-center">
                {/* Contains an image of me */}
                <div className="p-7 m-4 flex items-center justify-center h-[80%] w-[70%] h-md-[100%] w-md-[40%]">
                    <img src={MeLogo} alt="imageOfMe" className="rounded-md h-[70%] w-[60%] h-md-[60%] w-md-[50%]"></img>
                </div>
                {/* Introduction title Explaining what this prioject will cover */}
                <div className="p-8 p-md-5 m-4 flex flex-col items-center justify-center w-[100%]  h-md-[100%] w-md-[40%]">
                    <h3 className="introductionHeader text-white text-3xl word-break my-[1rem]">
                        <span className="text-3xl">Welcome to my page,</span>
                        this page is my first project using React.</h3>
                    <p className="introductionText text-white text-lg word-break my-[1rem]">I will be showing and attempting my first responsive design using this framework.
                    I will also be showing how the use of data can be used and displayed on the page.</p>
                </div>
            </div>
        </>
    )
};

