import Link from 'next/link'
import React, { useState } from 'react'
import prisma from '../../lib/prisma'

// FETCH ALL Movies
export async function getServerSideProps() {
	const series = await prisma.serie.findMany()
    const serielist = JSON.parse(JSON.stringify(series))

	return {
        props: { serielist },
	}
}


// todo Make sure to add this whenever the user selects a certain serie such as game of thrones and display it in the card item. 
export default function Home(props) {
    console.log('serielist', props.serielist)

	return (
		<>
            {props.serielist.map((serie) => {
				return (
					<div className="flex-col flex transition transform-all active:scale-95 ease-in-out  hover:scale-105 flex-shrink cursor-pointer mx-10 text-justify">
						<div className="flex items-center gap-4 justify-between">
							<div>{serie.episodeid}</div>
							<Link key={serie.id} href={`/series/${serie.id}`}>
								<img
									src={serie.image}
									className="
                                     max-h-48
                                        snap-center
                                        scroll-hidden
                                        hover:z-50
                                        sm:w-40
                                        sm:h-full
                                        sm:mx-2 mx-3 flex-shrink p-5 sm:p-2 text-sm sm:text-md gap-2 
                                        font-semibold items-center 
                                        uppercase shadow-xl drop-shadow-lg cursor-pointer text-slate-500 hover:text-indigo-600 divide-x-w-full sm:rounded-sm object-cover "
									allowFullScreen
									autoPlay
									frameBorder="0"
								/>
							</Link>
							<div className="flex-1">{serie.synopsis}</div>
							<div>{serie.episodelength}</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
