import React from "react";

const ExerciseVideos = ({ exerciceVideos, name }) => {
    console.log(exerciceVideos);
    return (
        <div className="videos-container">
            <h3>
                Watch <span>{name}</span> exercices videos
            </h3>
            <div className="video">
                wait for a video
                {/* {exerciceVideos?.map((video, index) => (
                    <a
                        key={index}
                        href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                        className="exercice-video"></a>
                ))} */}
            </div>
        </div>
    );
};

export default ExerciseVideos;
