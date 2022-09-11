import Link from 'next/link'
import React from 'react'
import { useSearch } from '../../context/SearchContext'


export default function HorizontalListDB({ data, category }) {

    console.log('DATA', data)
    const searchState = useSearch()


    return (
        <div>
            <h1 className="mx-3 text-3xl p-4 font-extrabold">{category}</h1>
            <div className="flex gap-2 overflow-x-auto scroll-x-hidden 	scroll-snap-type: x var(--tw-scroll-snap-strictness) scrollbar-hide h-auto">
                {data.filter((movieitem) =>
                    movieitem.category.toLowerCase().includes(searchState.searchTerm)).map(movie => {
                        return (
                            <Link key={movie.id}
                                href={`/movies/${movie.id}`}>
                                <img src={movie.image}
                                    className="
                                    max-h-48
                                            snap-center
                                            scroll-hidden
                                            hover:z-50
                                            sm:w-screen
                                            sm:h-full
                                            sm:mx-2 mx-3 hover:scale-110 flex-shrink p-5 sm:p-2 text-sm sm:text-md gap-2 inline-flex
                                            transition transform-all active:scale-95 ease-in-out font-semibold items-center 
                                            uppercase shadow-xl drop-shadow-lg cursor-pointer text-slate-500 hover:text-indigo-600 divide-x-w-full sm:rounded-sm object-cover "
                                    allowFullScreen
                                    autoPlay
                                    frameBorder="0"
                                />
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}
