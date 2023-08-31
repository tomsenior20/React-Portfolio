import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function About() {
    const [experiences, setExperiences] = useState([]);

    const experience =
        [
            { Comapany: "Mcdonalds", TimeFrame: "2019-2021" },
            { Comapany: "Atos", TimeFrame: "2021-2022" },
            { Comapany: "Worldline", TimeFrame: "2022-Present" }
        ]

    useEffect(() => {
        setExperiences(experience);
    }, []);


    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <div className="h-[300px] flex justify-center items-center md:h-[400px] p-3">
                <h1 className="contactMainHeader text-white text-5xl md:text-7xl text-center ">About Me...</h1>
            </div>
            <div className="experienceContainer">
                <div className="h-[400px] md:h-[450px] w-[85%] md:w-[50%] mx-auto flex justify-center items-center">
                    <h3 className="experienceHeader text-clip text-4xl text-white">Hi, I'm <span className="mx-1 text-5xl underline decoration-indigo-500">Tom Senior </span>
                        and i am currently undertaking a journey into software engineering</h3>
                </div>
            </div>
            <div className="experience flex flex-col md:flex-col h-[400px] md:h-[500px] my-[4rem] justify-center items-center">
                {/* Maps Over Experience and creates new timeline item per record */}
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col md:flex-row w-full md:w-[30%] justify-between around">
                        <Timeline position={index % 2 === 0 ? 'alternate' : 'alternate-reverse'} className="flex-col flex">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className="text-indigo" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className="text-white">
                                    <p className="text-2xl">{exp.Comapany}</p>
                                    <p className="text-2xl">{exp.TimeFrame}</p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                ))}
            </div>
        </>
    )
};
