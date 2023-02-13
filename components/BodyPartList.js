import { path } from "@/config";
import { setBodyPartFilter } from "@/feature/bodyPartFilter.Slice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const BodyPartList = ({ bodyPart }) => {
    const nospace = bodyPart.replace(/\s+/g, "");
    const dispatch = useDispatch();

    return (
        <div
            className="carousel-item rounded-xl item hover:font-GothamBold hover:text-yellow-300"
            onClick={() => dispatch(setBodyPartFilter(bodyPart))}>
            <div className="img">
                {
                    <Image
                        src={`${path}/img/noback/${nospace}.png`}
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
