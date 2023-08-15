import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import '../static/home.css'
import '../static/newsArticles.css'
import MeLogo from '../static/me.jpeg'

export default function Home(params) {
    const [article, setArticle] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-08-14&to=2023-08-14&sortBy=popularity&pageSize=3&apiKey=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    setArticle(data.articles);
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }, 1000);
    });


    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="mt-[150px] p-9 h-[650px] flex justify-center items-center min-h-[550px]">
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
                        <span className="text-4xl">Welcome to my page, </span>
                        This page is my first project using React.</h3>
                    <p className="introductionText text-white text-lg word-break my-[1rem]">
                        I will be showing and attempting my first responsive design using this framework.
                        I will also be showing how the use of data can be used and displayed on the page.
                    </p>
                </div>
            </div>
            <section className="min-h-[400px] my-[4rem] flex flex-col p-1 md:p-[3rem] w-full md:w-[80%] justify-center items-center mx-auto">
                <h3 className="articleHeader text-3xl text-white my-[4rem]">News Articles</h3>
                {article.map((element, index) => (
                    <div className="newsArticles flex flex-col mx-2 w-[90%] md:w-[40%] min-h-[200px]" key={index}>
                        <h1 className="text-white text-2xl my-2 text-center">{element.title}</h1>
                        <ol>
                            <li className="my-[2rem] text-center text-white">
                                <a href={element.url}>Link To Article</a>
                            </li>
                        </ol>
                        <p className="text-white text-1xl text-center">Published: {new Date(element.publishedAt).toLocaleDateString("EN-GB")}</p>
                    </div>
                ))}
            </section>
        </>
    )
};

