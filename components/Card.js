import { setexerciceId } from "@/feature/exerciceId.Slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ exercice }) => {
    const dispatch = useDispatch();
    return (
        <Link
            href={`/exercice/[exerciceDetail]`}
            as={`exercice/${exercice.id}`}
            onClick={() => dispatch(setexerciceId(exercice))}>
            <div className="card-exercice sm:h-96">
                <Image
                    src={`${exercice.gifUrl}`}
                    alt={exercice.name}
                    width={350}
                    height={350}
                    className=""
                />
                <div className="card-target">
                    <button className=" btn first-btn">
                        {exercice.bodyPart}
                    </button>
                    <button className=" btn  second-btn">
                        {exercice.target}
                    </button>
                </div>
                <h3 className="exercice-name font-GothamBold">
                    {exercice.name.charAt(0).toUpperCase() +
                        exercice.name.slice(1)}
                </h3>
            </div>
        </Link>
    );
};

export default Card;
