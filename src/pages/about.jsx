import React from 'react';
import { Helmet } from 'react-helmet'

export default function About(params) {
    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <div className="mt-[100px] p-3">
                <h1 className="text-white text-center ">About Me...</h1>
            </div>
        </>
    )
};
