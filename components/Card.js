import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ exercice }) => {
    return (
        <Link href={`/exercice/[id]`} as={`exercice/${exercice.id}`}>
            <div className="card-exercice">
                <Image
                    src={`${exercice.gifUrl}`}
                    alt={exercice.name}
                    width={400}
                    height={400}
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
