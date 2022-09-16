import Router from 'next/router'
import React from 'react'
import Button from '../Button/Button'
import ButtonRowContainer from '../Button/ButtonRowContainer'

export default function HeaderImage() {
    return (
        <header
            className="relative flex items-end justify-center sm:justify-center h-screen mb-12 overflow-hidden"
        >
            <div
                className="relative z-30 p-5 text-2xl text-white ml-4 sm:mb-80 bg-opacity-50 rounded-xl h-auto text-center space-y-8"
            >
                <h1 className="text-3xl sm:text-8xl">
                    Unlimited movies, TV shows, and more.
                </h1>
                <p className="text-lg sm:text-3xl text-left">Watch anywhere. Cancel anytime.</p>
                <p className="text-lg sm:text-xl text-left">Ready to watch? Enter your email to create or restart your membership.
                    Ready to watch? Enter your email to create or restart your membership.
</p>

                <ButtonRowContainer>
                    <input placeholder='Email adress'  name='email' type='email' className="w-full px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 hover:shadow text-black" />
                    <Button text="GET STARTED" buttonring='ring-white' buttonbg='bg-red-700' rounded={false} handleClick={() => Router.push('/signup')}/>
                </ButtonRowContainer>
            </div>
            <div className="absolute z-20 w-auto sm:min-w-full sm:min-h-full max-w-none flex-auto aspect-video sm:aspect-auto bg-black opacity-70"></div>
            <img
                className="absolute z-10 w-auto sm:min-w-full sm:min-h-full max-w-none flex-auto aspect-video sm:aspect-auto"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/disney-plus-halloween-movies-movie-posters-1591278506.jpg"
            />
        </header>
    )
}
