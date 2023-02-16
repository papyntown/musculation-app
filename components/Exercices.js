import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Exercices = ({ exerciseData, exercices, bodyPartList }) => {
    const bodyPartFilter = useSelector(
        (state) => state.bodyPartFilter.bodyPartFilter
    );
    const [scrollCard, setscrollCard] = useState(12);
    console.log(exercices);

    useEffect(() => {
        const watcher = document.getElementById("watcher");
        new IntersectionObserver(handleIntersect).observe(watcher);
    }, []);
    const handleIntersect = (entries) => {
        if (entries[0].isIntersecting) {
            setscrollCard((prev) => prev + 12);
        }
    };
    return (
        <div className="containers ">
            <div className="card-containers   mx-auto  w-11/12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 lg:max-w-8xl   gap-y-10 gap-x-8 px-4 py-8 ">
                {/* Je veux un map d'exercices qui m'affiche les 10 premiers */}

                {bodyPartFilter === "All"
                    ? exercices.length > 0
                        ? exercices
                        : exerciseData

                              .slice(0, scrollCard)
                              .map((exercice, index) => (
                                  <Card key={exercice.id} exercice={exercice} />
                              ))
                    : exercices.length > 0
                    ? { exercices }
                    : exerciseData

                          .filter((exercice) =>
                              exercice.bodyPart.includes(bodyPartFilter)
                          )
                          .slice(0, scrollCard)
                          .map((exercice, index) => (
                              <Card key={exercice.id} exercice={exercice} />
                          ))}
            </div>
            <div className="intersection-watcher" id="watcher"></div>
        </div>
    );
};

export default Exercices;
