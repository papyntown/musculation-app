import Image from "next/image";
import Link from "next/link";
import React from "react";
import TargetImage from "../public/img/target.png";
import EquipmentImage from "../public/img/equipment.png";
import BodyPartImage from "../public/img/body-part.png";

const Detail = ({ exercice }) => {
    const iconDetail = [
        {
            icon: BodyPartImage,
            name: exercice.bodyPart,
        },
        {
            icon: TargetImage,
            name: exercice.target,
        },
        {
            icon: EquipmentImage,
            name: exercice.equipment,
        },
    ];
    return (
        <div className="detail">
            <div className="detail-container">
                <div className="img">
                    <Image
                        src={`${exercice.gifUrl}`}
                        alt={exercice.name}
                        width={500}
                        height={600}
                        className=""
                    />
                </div>
                <div className="resume">
                    <h1 className="title font-GothamBold">{exercice.name}</h1>
                    <p>
                        Exercises keep you strong.{" "}
                        <Link href={"/"}>
                            <span>
                                {exercice.name.charAt(0).toUpperCase() +
                                    exercice.name.slice(1)}
                            </span>
                        </Link>{" "}
                        is the one of the best exercises to target your{" "}
                        <Link href={""}>
                            <span>{exercice.bodyPart}</span>
                        </Link>
                        . It will help you to improve your mood and gain energy.
                    </p>
                    <div className="detail-icon">
                        {iconDetail.map((icon) => (
                            <div className="icon" key={icon.name}>
                                <div className="img-icon">
                                    <Image
                                        src={icon.icon}
                                        alt={icon.name}
                                        width={50}
                                        height={50}
                                        className=""
                                    />
                                </div>
                                <p className=" font-GothamBold capitalize">
                                    {icon.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
