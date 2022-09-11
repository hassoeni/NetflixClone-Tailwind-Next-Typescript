import { PrismaClient } from '@prisma/client'
import { useState } from 'react'
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import SolidIcons from '../../src/components/Icons/SolidIcons'
import OutlinedIcons from '../../src/components/Icons/OutlinedIcons'
import Link from 'next/link'
import TooltipsBase from '../../src/components/Tooltip/TooltipBaseSizeTop'
import TooltipBaseSizeTop from '../../src/components/Tooltip/TooltipBaseSizeTop'
import Series from '../series'
const prisma = new PrismaClient()

export default function Movie(props) {
	const [liked, setLiked] = useState(false)
	const [favorite, setFavorite] = useState(false)

	console.log('props film', props.film)
	const [showEditFoodModal, setShowEditFoodModal] = useState(false)
	const router = useRouter()

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
            <div className="justify-center items-center flex h-auto bg-slate-900 text-white px-96 min-h-screen">
			<div className="flex-col my-10  p-8 h-full self-start space-y-6 space-x-8 relative flex-shrink m-40 bg-clip-content bg-gradient-to-t from-slate-800 via-stone-900">
				<img
					src={props.film.image}
                        className="aspect-video object-cover w-full h-1/2 border-t-2 rounded-t-md"
				/>
				<div className="inline-flex">
					<button className=" transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-black uppercase absolute bottom-1/2 text-black p-2 rounded-md bg-white flex gap-2 shadow-lg">
						<SolidIcons icon={'PlayIcon'} />
						play
					</button>
					<button
						onClick={returnTohome}
						className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute top-12 right-14 text-white p-2 rounded-full bg-slate-700 text-3xl"
					>
						<SolidIcons icon={'XIcon'} />
					</button>
					<button
						onClick={handleFavorite}
						className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute bottom-1/2 left-40 text-white p-2 rounded-full bg-slate-700 text-3xl"
					>
						{/* <!-- Base Size Top Tooltip --> */}
						<span
							className="group relative cursor-pointer overflow-hidden hover:overflow-visible"
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
						className="transition transform-all active:scale-95 delay-50 ease-in-out border-2 border-white uppercase absolute bottom-1/2 left-56 text-white p-2 rounded-full bg-slate-700 text-3xl"
					>
						{liked ? (
							<SolidIcons icon={'ThumbUpIcon'} />
						) : (
							<OutlinedIcons icon={'ThumbUpIcon'} />
						)}
					</button>
				</div>
				<div className="flex flex-wrap items-baseline gap-4 text-justify ">
					<div className="flex-1 flex justify-around">
						<div className="flex flex-col space-y-3">
							<span className="text-red-700 font-semibold">{`View count: ${props.film.viewcount}`}</span>
							<div className="flex gap-2 items-center">
								<span className="text-green-700 font-semibold">
									{randomNumber()}% match
								</span>
								<p>{props.film.category}</p>
								<p>{props.film.movielength}</p>
								<div className="border-2 px-1 border-slate-700 font-semibold text-xs">
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
							{/* add series */}
							<Series/>
							{/* add additional info */}
						</div>
					</div>
				</div>
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
	const film = JSON.parse(JSON.stringify(onemovie))
	return {
		props: {
			film,
		},
	}
}
