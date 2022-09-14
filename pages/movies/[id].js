import { PrismaClient } from '@prisma/client'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import SolidIcons from '../../src/components/Icons/SolidIcons'
import OutlinedIcons from '../../src/components/Icons/OutlinedIcons'
import Link from 'next/link'
import TooltipsBase from '../../src/components/Tooltip/TooltipBaseSizeTop'
import TooltipBaseSizeTop from '../../src/components/Tooltip/TooltipBaseSizeTop'
import Series from '../series'
import TabsLgBasicFullWidth from '../../src/components/ActiveTabs/ActiveTab'
const prisma = new PrismaClient()

export default function Movie(props) {
	const [liked, setLiked] = useState(false)
	const [favorite, setFavorite] = useState(false)
	const [serieData, setSerieData] = useState([])



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

	const ReleaseYear = props.film.createdAt
	const date = new Date(ReleaseYear)
	const formatoptions = { year: 'numeric' }
	const formattedDate = date.toLocaleDateString(formatoptions)





	return (
		<div className="flex items-center justify-center h-auto min-h-screen text-white bg-gradient-to-t from-slate-800 via-stone-900 to-slate-900 px-96">
			<div className="relative flex-col self-start flex-shrink h-full p-8 m-40 my-10 space-x-8 space-y-6 bg-clip-content bg-gradient-to-t from-slate-800 via-stone-900 to-slate-900">
				<img
					src={props.film.image}
                        className="object-cover w-full aspect-video h-1/2 rounded-t-md"
				/>
				<div className="inline-flex">
					<button className="absolute flex gap-2 p-2 text-black uppercase transition ease-in-out bg-white border-2 border-black rounded-md shadow-lg transform-all active:scale-95 delay-50 top-96">
						<SolidIcons icon={'PlayIcon'} />
						play
					</button>
					<button
						onClick={returnTohome}
						className="absolute p-2 text-3xl text-white uppercase transition ease-in-out border-2 border-white rounded-full transform-all active:scale-95 delay-50 top-12 right-14 bg-slate-700"
					>
						<SolidIcons icon={'XIcon'} />
					</button>
					<button
						onClick={handleFavorite}
						className="absolute p-2 text-3xl text-white uppercase transition ease-in-out border-2 border-white rounded-full transform-all active:scale-95 delay-50 top-96 left-40 bg-slate-700"
					>
						{/* <!-- Base Size Top Tooltip --> */}
						<span
							className="relative overflow-hidden cursor-pointer group hover:overflow-visible"
							aria-describedby="tooltip-01"
						>
							{/* <!-- Add your tooltip trigger between here --> */}

							{favorite ? (
								<SolidIcons icon={'PlusIcon'} />
							) : (
								<OutlinedIcons icon={'PlusIcon'} />
							)}
							{/* <!-- and here --> */}
							<span
								role="tooltip"
								id="tooltip-01"
								className="invisible absolute bottom-full left-1/4 z-10 mb-5 w-48 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
							>
								Add to watchlist
							</span>
						</span>
					</button>
					<button
						onClick={handleLike}
						className="absolute p-2 text-3xl text-white uppercase transition ease-in-out border-2 border-white rounded-full transform-all active:scale-95 delay-50 top-96 left-56 bg-slate-700"
					>
						{liked ? (
							<SolidIcons icon={'ThumbUpIcon'} />
						) : (
							<OutlinedIcons icon={'ThumbUpIcon'} />
						)}
					</button>
				</div>
				<div className="flex flex-wrap items-baseline gap-4 text-justify ">
					<div className="flex justify-around flex-1">
						<div className="flex flex-col space-y-3">
							<span className="font-semibold text-red-700">{`View count: ${props.film.viewcount}`}</span>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-green-700">
									{randomNumber()}% match
								</span>
								<p>{props.film.category}</p>
								<p>{props.film.movielength}</p>
								<div className="px-1 text-xs font-semibold border-2 border-slate-700">
									HD
								</div>
							</div>
							<p className='pb-4'>{props.film.description}</p>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex-col">
							{/* add cast */}
							<p>
								<span className="text-slate-400">Cast: </span>
								{`${props.film.cast}`}
							</p>
							<p>
								<span className="text-slate-400">Genre: </span>
								{`${props.film.category}`}
							</p>
							<p>
								<span className="text-slate-400">Release Year: </span>
								{formattedDate}
							</p>
						</div>
					</div>
				</div>
				<TabsLgBasicFullWidth serielist={props.series}/>
							{/* <Series serielist={props.series} /> */}
			</div>
        </div>
	)
}
{
	/* {showEditFoodModal ? (
        <EditFood food={food} closeModal={() => setShowEditFoodModal(false)} />
    ) : null} */
}

export async function getServerSideProps(context) {
	const { id } = context.params
 	const onemovie = await prisma.movie.findUnique({
		where: { id: parseInt(id) },
	})

	const serielist = await prisma.serie.findMany({
		where: {parentId: parseInt(id)}
	})


	const series = JSON.parse(JSON.stringify(serielist))
	const film = JSON.parse(JSON.stringify(onemovie))

	return {
		props: {
			film,
			series,
		},
	}
}
