import React from 'react'
import { useSearch } from '../../context/SearchContext'

export default function HorizontalList({ data, title }) {
    console.log('DATA', data)
    const searchState = useSearch()

    
    return (
        <div>
            <h1 className="mx-3 text-3xl p-4 font-extrabold">{searchState.searchTerm}</h1>
            <div className="flex gap-2 overflow-x-auto scroll-x-hidden 	scroll-snap-type: x var(--tw-scroll-snap-strictness) scrollbar-hide">
                {data.filter((movieitem) =>
                    movieitem.snippet.title.toLowerCase().includes(searchState.searchTerm)).map(movie => {
                        const videoSrc = `https://www.youtube.com/embed/${movie.id.videoId}`
                        console.log('MOVIE', movie)
                        return (
                            <>
                            {/* TODO add initial search and lift searchbar up towards context */}
                                <iframe src={videoSrc}
                                    key={movie.id}
                                    className="
                                            snap-center
                                            scroll-hidden
                                            hover:z-50
                                            sm:w-screen
                                            sm:h-1/2
                                            sm:mx-2 mx-3 hover:scale-110 flex-shrink p-5 sm:p-2 text-sm sm:text-md gap-2 inline-flex
                                            transition transform-all active:scale-95 ease-in-out font-semibold items-center 
                                            uppercase shadow-xl drop-shadow-lg cursor-pointer text-slate-500 hover:text-indigo-600 divide-x-w-full sm:rounded-sm "
                                allowFullScreen
                                autoPlay
                                frameBorder="0"

                                />
                            </>
                        )
                    })}
            </div>
        </div>
    )
}
