import React, { useState } from 'react';
import '../static/form.css'

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

    const handleNameChange = (e) => {
        setEnteredName(e.target.value);
    }

    const handleNumberChange = (e) => {
        setEnteredNumber(e.target.value);
    }

    const getEnteredInformation = (e) => {
        e.preventDefault();

        if (name && number) {
            // Creates a new Person object
            var newContact = new Person(name, number);
            // Sets the storage item
            localStorage.setItem("Record", JSON.stringify(newContact));
            // Sets inputs back to null
            setEnteredName("")
            setEnteredNumber("");
        } else {
            console.log('enteries null');
        }


    }

    return (
        <>
            <form onSubmit={getEnteredInformation} className="formColor flex flex-col justify-content-center items-center p-1 md:p-[2rem] text-start w-full md:w-[90%] my-10 mx-auto m-h-[400px]">
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
