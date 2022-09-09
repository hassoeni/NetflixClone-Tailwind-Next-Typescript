import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import SolidIcons from '../../src/components/Icons/SolidIcons'
import OutlinedIcons from '../../src/components/Icons/OutlinedIcons'
import Link from "next/link";
const prisma = new PrismaClient();

export default function Movie(props) {
    const [liked, setLiked] = useState(false)
    const [favorite, setFavorite] = useState(false)


    console.log('props film', props.film)
    const [showEditFoodModal, setShowEditFoodModal] = useState(false);
    const router = useRouter();


    function randomNumber() {
        return Math.floor(Math.random(100) * 100)
    }

    function handleLike() {
        setLiked(!liked)
    }
    function handleFavorite() {
        setFavorite(!favorite)
    }

    function returnTohome() {
        Router.push('/')
    }
    return (
        <div className="justify-center items-center flex h-screen px-10 bg-slate-900 text-white">

            <div className="flex-col my-10 border-2 h-full self-start space-y-4 space-x-8 relative">
                <img src={props.film.image} className="aspect-video object-cover w-full h-1/2" />
                <div className="inline-flex">
                    <button className=" transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-black uppercase absolute top-1/3 text-black p-2 rounded-md bg-white flex gap-2 shadow-lg">
                        <SolidIcons icon={"PlayIcon"} />
                        play
                    </button>
                    <button
                        onClick={returnTohome}
                        className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute top-8 right-8 text-white p-2 rounded-full bg-slate-700 text-3xl">
                        <SolidIcons icon={"XIcon"} />
                    </button>
                    <button
                        onClick={handleFavorite}
                        className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute top-1/3 left-32 text-white p-2 rounded-full bg-slate-700 text-3xl">
                        {favorite ? <SolidIcons icon={"PlusIcon"} /> : <OutlinedIcons icon={"PlusIcon"} />}
                    </button>
                    <button
                        onClick={handleLike}
                        className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute top-1/3 left-48 text-white p-2 rounded-full bg-slate-700 text-3xl">
                        {liked ? <SolidIcons icon={"ThumbUpIcon"} /> : <OutlinedIcons icon={"ThumbUpIcon"} />}
                    </button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex-1 flex justify-around">
                        <div className="flex flex-col space-y-3">
                            <span className="text-red-700 font-semibold">{`View count: ${props.film.viewcount}`}</span>
                            <div className="flex gap-2 items-center">
                                <span className="text-green-700 font-semibold">{randomNumber()}% match</span>
                                <p>
                                    {props.film.category}
                                </p>
                                <p>
                                    {props.film.movielength}
                                </p>
                                <div className="border-2 px-1 border-slate-700 font-semibold text-xs">
                                    HD
                                </div>
                            </div>
                            <p>
                                {props.film.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                    </div>
                </div>
            </div>
        </div>

    )
}
{/* {showEditFoodModal ? (
        <EditFood food={food} closeModal={() => setShowEditFoodModal(false)} />
    ) : null} */}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const onemovie = await prisma.movie.findUnique({ where: { id: parseInt(id) } });
    const film = JSON.parse(JSON.stringify(onemovie))
    return {
        props: {
            film,
        },
    };
}