import React from 'react'
import Button from '../Button/Button'
import ButtonRowContainer from '../Button/ButtonRowContainer'

export default function HeaderVideo() {
    return (
        <header
            className="relative flex items-end justify-end sm:justify-start h-screen mb-12 overflow-hidden"
        >
            <div
                className="relative z-30 p-5 text-2xl text-white ml-4 sm:mb-80 bg-opacity-50 rounded-xl h-auto text-center space-y-4"
            >
                <h1 className="text-3xl sm:text-9xl">
                    Born Legacy 3
                </h1>
                <p className="text-lg sm:text-3xl text-left">Personal mistakes are corrected here once and for all</p>
                <ButtonRowContainer>
                    <Button text="Play" buttonring='ring-white' />
                    <Button text="More Information" buttonbg='bg-slate-600' />
                </ButtonRowContainer>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto sm:min-w-full sm:min-h-full max-w-none flex-auto aspect-video sm:aspect-auto"
            >
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </header>
    )
}
