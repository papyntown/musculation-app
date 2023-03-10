import Image from "next/image";
import React from "react";

const ExerciseVideos = ({ exerciceVideos, name }) => {
    if (!exerciceVideos.length) return "loading";
    console.log(exerciceVideos);
    return (
        <div className="videos-container">
            <h3>
                Watch <span>{name}</span> exercices videos
            </h3>
            <div className="video">
                {exerciceVideos ? (
                    exerciceVideos.slice(0, 3).map((video, index) => (
                        <a
                            key={index}
                            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                            className="exercice-video "
                            style={{ wordWrap: "break-word" }}
                            target={"_blank"}
                            rel={"noreferrer"}>
                            <Image
                                src={`${video.video.thumbnails[0].url}`}
                                alt={video.video.title}
                                width={350}
                                height={350}
                                className=""
                            />
                            <h5 className={`video-title `}>
                                {video.video.title}
                            </h5>
                            <h6 className="video-channel">
                                {video.video.channelName}
                            </h6>
                        </a>
                    ))
                ) : (
                    <h3>Waiting</h3>
                )}
            </div>
        </div>
    );
};

export default ExerciseVideos;
