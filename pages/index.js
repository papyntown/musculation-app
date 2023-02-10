import Meta from "@/components/Meta";
import axios from "axios";
import React, { useState } from "react";

const index = () => {
    const [inputValue, setInputValue] = useState("");
    const [exerciseData, setExerciceData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault(e);
    };

    const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        headers: {
            "X-RapidAPI-Key":
                "d153d6b6b7mshb1d2247b5110942p198e6ejsn5367cbd85007",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };
    const getData = () => {
        console.log(inputValue);
        if (inputValue) {
            axios
                .request(options)
                .then((response) => {
                    console.log(response.data);
                    setExerciceData(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    };

    return (
        <div>
            <Meta />
            <div className=" bg-slate-100 h-screen  ">
                <div className="container w-11/12 mx-auto  pt-6">
                    <h1 className="text-5xl mb-7 lg:text-9xl font-cactusblack text-center  italic tracking-widest ">
                        TROUVE TON{" "}
                        <span className="text-yellow-300">
                            {" "}
                            EXERCICE MAINTENANT !
                        </span>
                    </h1>
                    <form
                        className="mx-auto flex  "
                        onSubmit={(e) => {
                            handleSubmit(e);
                            getData();
                        }}>
                        {/* <input
                            className="transition-all duration-300 text-2xl bg-slate-700 py-4 rounded-md
                             focus:outline-none focus:shadow-outline focus:rounded-2xl  px-4 block w-full text-center 
                             lg:text-left lg:w-2/4 lg:mx-auto  text-slate-200 appearance-none leading-normal"
                            type="text"
                            placeholder={"Ex : Biceps"}
                            id="search"
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                        /> */}

                        <div className="form-control w-full">
                            <div className="input-group justify-center">
                                <input
                                    type="text"
                                    placeholder="Search your exercices"
                                    className="transition-all duration-300 text-2xl bg-slate-700 py-4 px-4 rounded-md
                                    focus:outline-none focus:shadow-outline focus:rounded-2xl   block w-full text-center 
                                    lg:text-left lg:w-2/4   text-slate-200 appearance-none leading-normal"
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                    }}
                                />
                                <button className="btn btn-square h-20 hidden relative right-8 lg:block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default index;
