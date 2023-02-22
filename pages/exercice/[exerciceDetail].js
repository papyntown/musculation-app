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
import { useRouter } from "next/router";
import { setexerciceId } from "@/feature/exerciceId.Slice";

const Exercice = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const id = router.query.exerciceDetail;
    const [exerciceVideosData, setExerciceVideosData] = useState([]);

    // On récupère l'exercice du store Redux, ou undefined s'il n'est pas encore défini
    const exercice = useSelector((state) => state.exerciceId.exerciceId);

    useEffect(() => {
        // Si l'exercice n'est pas défini dans le store Redux, on réalise une requête Fetch pour le récupérer
        if (!exercice) {
            const fetchDataDetail = async () => {
                const res = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
                    exerciceOptions
                );
                dispatch(setexerciceId(res));
            };
            fetchDataDetail();
        } else {
            // On réalise la requête Fetch pour récupérer les vidéos de l'exercice uniquement si exercice est défini
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";
            const fetchExerciceVideosData = async () => {
                const exerciceName = exercice ? exercice.name : "";
                const exerciceVideosData = await fetchData(
                    `${youtubeSearchUrl}/search?query=${exerciceName}`,
                    youtubeOptions
                );
                setExerciceVideosData(exerciceVideosData.contents);
            };
            fetchExerciceVideosData();
        }
    }, [id, exercice, dispatch]);

    if (!exercice) {
        return <div>Loading...</div>;
    }

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

export default Exercice;
