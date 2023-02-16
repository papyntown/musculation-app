import { exerciceOptions, fetchData } from "@/components/FetchData";
import Meta from "@/components/Meta";
import React from "react";

const exercice = ({ exercice }) => {
    return (
        <div className="exercice-page">
            <Meta title={exercice.name} />
            <h1>{exercice.name}</h1>
        </div>
    );
};

export default exercice;
export const getStaticProps = async (context) => {
    const exerciceDetailServ = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/${context.params.id}`,
        exerciceOptions
    );
    return {
        props: {
            exerciceDetailServ: exerciceDetailServ,
        },
    };
};

// Le getStaticProps a besoin de getStaticPaths
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await res.json();
    // Préparer les id dans un objet path{ id:1, id:2}
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};
