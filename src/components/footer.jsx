import React, { useState, useEffect } from 'react'
import '../static/footer.css'

export default function Footer() {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateLocalTimeAndDate = () => {
            const now = new Date();
            // Sets the formatted string to GB timeZone
            const formattedTime = now.toLocaleTimeString('EN-GB')
            const formattedDate = now.toLocaleDateString("EN-GB")
            setDate(formattedDate)
            setTime(formattedTime)
        }
        updateLocalTimeAndDate()
        // Sets refresh timing of 1000
        const interval = setInterval(() => {
            updateLocalTimeAndDate();
        }, 1000);

        return () => clearInterval(interval)

    }, []);
    return (
        <footer className="flex flex-row justify-between items-center mt-[1rem] md:mt-[1rem] p-4 w-full mt-auto">
            <div className="flex items-center justify-center md:flex-row flex-col p-3">
                <p className="copyrightText text-white text-lg mx-1">Copyright:</p>
                <p className="copyrightText text-white text-lg mx-1">Tom Senior</p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center p-3">
                <p className="footerTimeText text-white text-center text-lg mx-1">{date}</p>
                <p className="footerTimeText text-white text-center text-lg mx-1 ">{time}</p>
            </div>
        </footer >
    )
};
