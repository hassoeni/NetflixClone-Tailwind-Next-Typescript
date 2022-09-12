import React, { useState } from 'react'
import OutlinedIcons from '../Icons/OutlinedIcons'
import SolidIcons from '../Icons/SolidIcons'

export default function HoverButtonRow() {
    const [liked, setLiked] = useState(false)
    const [favorite, setFavorite] = useState(false)
    function handleLike() {
        setLiked(!liked)
    }
    function handleFavorite() {
        setFavorite(!favorite)
    }

    return (
        <div className="hidden group-hover:block group-hover:z-50 absolute bottom-8 left-8">
            {/* playbutton */}
            <button className="absolute gap-2 p-2.5 text-3xl text-black uppercase transition ease-in-out bg-white  border-none rounded-full shadow-lg  transform-all active:scale-95 delay-50 bottom-0.5">
                <SolidIcons icon={'PlayIcon'} />
            </button>
            <button
                onClick={handleLike}
                className="absolute p-2 text-3xl text-white uppercase transition ease-in-out border-2 border-white rounded-full transform-all active:scale-95 delay-50 bottom-0.5 left-16 bg-slate-700"
            >
                {liked ? (
                    <SolidIcons icon={'ThumbUpIcon'} />
                ) : (
                    <OutlinedIcons icon={'ThumbUpIcon'} />
                )}
            </button>
            <button
                onClick={handleFavorite}
                className="absolute p-2 text-3xl text-white uppercase transition ease-in-out border-2 border-white rounded-full transform-all active:scale-95 delay-50 bottom-1/2 left-40 bg-slate-700"
            >
                {favorite ? (
                    <SolidIcons icon={'PlusIcon'} />
                ) : (
                    <OutlinedIcons icon={'PlusIcon'} />
                )}
            </button>
        </div>
    )
}
