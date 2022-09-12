import Link from 'next/link'
import React, { useState } from 'react'
import { useSearch } from '../../context/SearchContext'
import OutlinedIcons from '../Icons/OutlinedIcons'
import SolidIcons from '../Icons/SolidIcons'

export default function HorizontalListDB({ data, category }) {
	const [liked, setLiked] = useState(false)
	const [favorite, setFavorite] = useState(false)
	function handleLike() {
		setLiked(!liked)
	}
	function handleFavorite() {
		setFavorite(!favorite)
	}

	console.log('DATA', data)
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
							<div className="group relative">
								<Link key={movie.id} href={`/movies/${movie.id}`}>
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
							</div>
						)
					})}
			</div>
		</div>
	)
}
