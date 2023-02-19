import Detail from "@/components/Detail";
import ExerciseVideos from "@/components/ExerciseVideos";
import {
    exerciceOptions,
    fetchData,
    youtubeOptions,
} from "@/components/FetchData";
import Meta from "@/components/Meta";
import SimilarExercices from "@/components/SimilarExercices";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const exercice = () => {
    const exercice = useSelector((state) => state.exerciceId.exerciceId);
    const [exerciceVideosData, setExerciceVideosData] = useState([]);
    useEffect(() => {
        const fetchDataDetail = async () => {
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";
            const exerciceVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exercice.name}`,
                youtubeOptions
            );
            setExerciceVideosData(exerciceVideosData.contents);
        };
        fetchDataDetail();
    }, []);

    return (
        <div className="exercice-page w-11/12 mx-auto">
            <Meta title={exercice.name} />
            <Detail exercice={exercice} />
            <ExerciseVideos
                exerciceVideos={exerciceVideosData}
                name={exercice.name}
            />
            <SimilarExercices />
        </div>
    );
};

export default exercice;
