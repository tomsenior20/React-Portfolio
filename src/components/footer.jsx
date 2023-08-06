import React, { useState, useEffect } from 'react'

export default function Footer() {
    const [date, setDate] = useState('')

    useEffect(() => {
        const updateLocalTime = () => {
            const now = new Date();
            // Sets the formatted string to GB timeZone
            const formattedDate = now.toLocaleDateString("EN-GB")
            setDate(formattedDate)
        }
        updateLocalTime()
        // Sets refresh timing of 1000
        const interval = setInterval(() => {
            updateLocalTime();
        }, 1000);

        return () => clearInterval(interval)

    }, []);
    return (
        <footer className="flex flex-row justify-between items-center p-4 w-full mt-auto">
            <div className="flex items-center justify-center p-3">
                <p className="text-white text-lg">Copyright: Tom Senior</p>
            </div>
            <div className="flex items-center justify-center p-3">
                <p className="text-white text-lg">{date}</p>
            </div>
        </footer >
    )
};
