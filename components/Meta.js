import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};
Meta.defaultProps = {
    title: "Fitforces",
    // title: "Strength Training Exercise Library with Animated Gifs & Descriptions",
    description:
        "Discover the best strength training exercises with our comprehensive list. Each exercise comes with a clear description and helpful animated gifs to guide you through proper form and technique. Improve your workout and build muscle with our user-friendly exercise library.",
};

export default Meta;
