import Link from 'next/link'
import React, { useState } from 'react'
import { useSearch } from '../../context/SearchContext'
import OutlinedIcons from '../Icons/OutlinedIcons'
import SolidIcons from '../Icons/SolidIcons'
import HoverButtonRow from './HoverButtonRow'

export default function HorizontalListDB({ data, category }) {
	const searchState = useSearch()

	return (
		<div>
			<h1 className="mx-3 text-3xl p-4 font-extrabold">{category}</h1>
			<div className="flex gap-2 overflow-x-auto scroll-x-hidden 	scroll-snap-type: x var(--tw-scroll-snap-strictness) scrollbar-hide h-auto">
				{data
					.filter((movieitem) =>
						movieitem.category.toLowerCase().includes(searchState.searchTerm)
					)
					.map((movie) => {
                       
						return (
                            <div className="group relative" key={movie.id}>
								<Link  href={`/movies/${movie.id}`}>
									<img
										src={movie.image}
										className="
                                            max-h-48
                                            snap-center
                                            scroll-hidden
                                            hover:scale-110 
                                            hover:text-indigo-600 
                                            transition transform-all active:scale-95 ease-in-out 
                                            font-semibold items-center 
                                            flex-shrink 
                                            p-5 sm:p-2 
                                            text-sm sm:text-md gap-2 inline-flex
                                            sm:w-screen
                                            sm:h-full
                                            sm:mx-2 mx-3 
                                            uppercase shadow-xl drop-shadow-lg cursor-pointer text-slate-500 
                                            divide-x-w-full sm:rounded-sm object-cover "
										allowFullScreen
										autoPlay
										frameBorder="0"
									/>
								</Link>
								<HoverButtonRow/>
							</div>
						)
					})}
			</div>
		</div>
	)
}
