import React, { useState } from 'react';
import '../static/form.css'
import { AiFillCloseCircle } from 'react-icons/ai';

// Define a class to represent a person
class Person {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

export default function Form() {
    const [name, setEnteredName] = useState("");
    const [number, setEnteredNumber] = useState("");
    // Set Should show Banner Message
    const [shouldDisplay, setshouldDisplay] = useState(false);
    // Set SetFormSubmitMSG
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setEnteredName(e.target.value);
    }

    const handleNumberChange = (e) => {
        setEnteredNumber(e.target.value);
    }
    // Handles the form submit
    const getEnteredInformation = (e) => {
        e.preventDefault();
        var msg = "";
        if (name && number) {
            // Checks to see if the record exists
            if ("Record_" + name in localStorage) {
                msg += "Record Exists Already";
                setEnteredName("");
                setEnteredNumber("");
            } else {
                // Creates a new Person object
                var newContact = new Person(name, number);
                // Sets the storage item
                localStorage.setItem("Record_" + name, JSON.stringify(newContact));
                msg += 'Form Submitted';
                // Sets inputs back to null
                setEnteredName("")
                setEnteredNumber("");
            }
        } else {
            msg += 'Please Enter Valid Inputs';
        }

        setMessage(msg);
        setshouldDisplay(true);
    }
    // Handles Button Click to Close Banner Message
    const CloseBannerMessage = () => {
        setshouldDisplay(false);
        setMessage("");
    }

    return (
        <>
            <div className="validationMessage" style={{ display: shouldDisplay ? 'flex' : "none" }} id="banner_message">
                {/* Message Container */}
                <div className="message">
                    <p id="messagesn" className="d-flex flex-start">{message}</p>
                </div>
                {/* Button For Closing banner */}
                <div className="close flex items-middle justify-end">
                    <button onClick={CloseBannerMessage} className="btn">
                        <AiFillCloseCircle />
                    </button>
                </div>
            </div>
            <form onSubmit={getEnteredInformation} className="formColor flex flex-col justify-content-center items-center p-1 md:p-[2rem] text-start w-full md:w-[90%] my-6 mx-auto m-h-[400px]">
                <label className="formText rounded-md text-2xl text-black my-2 w-full md:w-[50%]">Enter Name</label>
                <input
                    id="enteredName"
                    className="formInput rounded-md text-1xl text-start text-black my-2 w-full md:w-[50%] p-3"
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={handleNameChange}
                />
                <label className="formText rounded-md text-2xl text-black my-2 w-full md:w-[50%]">Enter Contact Number</label>
                <input
                    id="enteredPhoneNumber"
                    className="formInput rounded-md text-1xl text-start text-black my-2 w-full md:w-[50%] p-3"
                    type="number"
                    value={number}
                    placeholder="Enter Contact Number"
                    onChange={handleNumberChange}
                />
                <button type="submit" className="formButton rounded-full my-6 w-full md:w-[50%] p-2 text-1xl ">Submit Contact Form</button>
            </form>
        </>
    )
};
