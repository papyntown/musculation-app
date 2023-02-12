import { path } from "@/config";
import axios from "axios";
import Image from "next/image";
import React from "react";

const BodyPartList = ({ bodyPart }) => {
    const nospace = bodyPart.replace(/\s+/g, "");

    return (
        <div className="carousel-item rounded-xl item  ">
            <div className="img">
                {
                    <Image
                        src={`${path}/img/noback/${nospace}.png`}
                        // src={`${path}/img/${nospace}.png`}
                        alt={bodyPart}
                        width={100}
                        height={100}
                        className=" w-28 h-48 lg:w-48 lg:h-64 "
                    />
                }
            </div>
            <h2>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</h2>
        </div>
    );
};

export default BodyPartList;
