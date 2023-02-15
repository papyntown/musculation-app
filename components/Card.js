import Image from "next/image";
import React from "react";

const Card = ({ exercice }) => {
    return (
        <div className="card-exercice">
            <Image
                src={`${exercice.gifUrl}`}
                alt={exercice.name}
                width={400}
                height={400}
                className=""
            />
            {exercice.name}
        </div>
    );
};

export default Card;
