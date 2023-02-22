import BodyPartList from "@/components/BodyPartList";
import Exercices from "@/components/Exercices";
import { exerciceOptions, fetchData } from "@/components/FetchData";
import Meta from "@/components/Meta";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const index = ({ bodyPartListServ, exerciceDataServ }) => {
    const bodyPartFilter = useSelector(
        (state) => state.bodyPartFilter.bodyPartFilter
    );
    const [exerciseData, setExerciceData] = useState(exerciceDataServ);
    const [inputValue, setInputValue] = useState("");
    const [exerciseDataFiltered, setExerciseDataFiltered] =
        useState(exerciceDataServ);
    const [bodyPartList, setBodyPartList] = useState(bodyPartListServ);
    const handleSubmit = (e) => {
        e.preventDefault(e);
    };

    const getData = async () => {
        if (inputValue) {
            const searchedExercices = exerciseData.filter(
                (exercice) =>
                    exercice.name
                        .toLowerCase()
                        .includes(inputValue.toLocaleLowerCase()) ||
                    exercice.target
                        .toLowerCase()
                        .includes(inputValue.toLocaleLowerCase()) ||
                    exercice.equipment
                        .toLowerCase()
                        .includes(inputValue.toLocaleLowerCase()) ||
                    exercice.bodyPart
                        .toLowerCase()
                        .includes(inputValue.toLocaleLowerCase())
            );
            setInputValue("");
            setExerciseDataFiltered(searchedExercices);
            window.scrollTo({ top: 550, left: 100, behavior: "smooth" });
        }
    };

    return (
        <div>
            <Meta />
            <div className="font-GothamLight  ">
                <div className="container w-11/12 mx-auto  pt-4">
                    <h1 className="text-5xl mb-7 lg:text-9xl font-cactusblack text-center italic tracking-widest ">
                        FIND YOUR{" "}
                        <span className="text-yellow-300"> EXERCISE NOW!</span>
                    </h1>

                    <form
                        className="mx-auto flex  "
                        onSubmit={(e) => {
                            handleSubmit(e);
                            getData();
                        }}>
                        <div className="form-control w-full">
                            <div className="flex justify-center ">
                                <input
                                    type="text"
                                    placeholder="Search your exercices"
                                    value={inputValue}
                                    className=" font-GothamBold transition-all duration-300 text-2xl bg-slate-700 py-4 px-4 rounded-lg
                                    focus:outline-none focus:shadow-outline focus:rounded-2xl   block w-full text-center 
                                    lg:text-left lg:w-2/4   text-slate-200 appearance-none leading-normal"
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                    }}
                                />
                                <button className="btn btn-square h-20 hidden lg:block relative right-8 ">
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
                <div className="wrapper  mt-2 mx-auto  ">
                    {bodyPartList &&
                        bodyPartList.map((bodyPart, index) => (
                            <BodyPartList key={index} bodyPart={bodyPart} />
                        ))}
                </div>
                {exerciseData ? (
                    <Exercices
                        exerciseData={exerciseData}
                        bodyPartList={bodyPartList}
                        exerciseDataFiltered={exerciseDataFiltered}
                    />
                ) : (
                    "please wait"
                )}
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciceOptions
    );
    const bodyPartListServ = await ["All", ...bodyPartData];
    const exerciceDataServ = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciceOptions
    );

    return {
        props: {
            bodyPartListServ: bodyPartListServ,
            exerciceDataServ: exerciceDataServ,
        },
    };
};

export default index;
