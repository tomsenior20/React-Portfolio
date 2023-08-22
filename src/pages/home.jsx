import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import '../static/home.css'
import '../static/newsArticles.css'
import MeLogo from '../static/me.jpeg'

export default function Home(params) {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=53.483959&longitude=-2.244644&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
                .then((response) => response.json())
                .then((data) => {
                    setWeather(data.current_weather);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5 * 60 * 1000); // Fetch every 5 minutes

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="p-9 h-[650px] flex justify-center items-center min-h-[550px]">
                <h1 className="homeIntroductionTitle text-white text-5xl md:text-7xl text-center p-2">Welcome to My Portfolio</h1>
            </div>
            <div className="descriptionContainer flex flex-col md:flex-row p-10 my-[4rem] min-h[600px] flex justify-center items-center">
                {/* Contains an image of me */}
                <div className="p-7 m-4 flex items-center justify-center h-[80%] w-[70%] md:h-[100%] md:w-[40%]">
                    <img src={MeLogo} alt="imageOfMe" className="rounded-md h-[70%] w-[60%] md:h-[60%] md:w-[50%]"></img>
                </div>
                {/* Introduction title Explaining what this prioject will cover */}
                <div className="p-8 md:p-5 m-4 flex flex-col items-center justify-center w-[100%]  md:h-[100%] md:w-[40%]">
                    <h3 className="introductionHeader text-white text-2xl word-break my-[1rem]">
                        <span className="introText text-4xl">Welcome to my page, </span>
                        This page is my first project using React.</h3>
                    <p className="introductionText text-white text-lg word-break my-[1rem]">
                        I will be showing and attempting my first responsive design using this framework.
                        I will also be showing how the use of data can be used and displayed on the page.
                    </p>
                </div>
            </div>
            <section className="min-h-[400px] my-[4rem] flex flex-col p-1 md:p-[3rem] w-full md:w-[80%] justify-center items-center mx-auto">
                <h3 className="articleHeader text-3xl text-white my-[4rem]">Weather in Manchester</h3>
                <div className="weatherContainer w-full">
                    <div className="weatherContainer flex flex-row justify-between w-[50%] my-[2rem] mx-auto">
                        <p className="text-2xl text-white">Temperature:</p>
                        <p className="text-2xl text-white">{weather.temperature}</p>
                    </div>
                    <div className="weatherContainer flex flex-row justify-between w-[50%] my-[2rem] mx-auto">
                        <p className="text-2xl text-white">Wind Speed:</p>
                        <p className="text-2xl text-white">{weather.windspeed}</p>
                    </div>
                    <div className="weatherContainer flex flex-row justify-between w-[50%] my-[2rem] mx-auto">
                        <p className="text-2xl text-white text-break">Weather Code:</p>
                        <p className="text-2xl text-white">{weather.weathercode}</p>
                    </div>
                </div>
            </section>


        </>
    )
};

