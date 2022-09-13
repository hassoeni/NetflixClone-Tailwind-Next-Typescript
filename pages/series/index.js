import Link from 'next/link'
import React, { useState } from 'react'



// todo make sure to add a tab and display only episodes per season
export default function Series(props) {
    console.log('serielist', props.serielist)

	return (
		<>
            {props.serielist.map((serie) => {
				return (
					<div key={serie.episodeid} className="flex flex-col flex-shrink mx-10 text-justify transition ease-in-out cursor-pointer transform-all active:scale-95 hover:scale-105">
						<div className="flex items-center justify-between gap-4">
							<div>{serie.episodeid}</div>
							<Link key={serie.id} href={`/series/${serie.episodeid}`}>
								<img 
									src={serie.image}
									className="items-center flex-shrink object-cover gap-2 p-5 mx-3 text-sm font-semibold uppercase shadow-xl cursor-pointer max-h-48 snap-center scroll-hidden hover:z-50 sm:w-40 sm:h-full sm:mx-2 sm:p-2 sm:text-md drop-shadow-lg text-slate-500 hover:text-indigo-600 divide-x-w-full sm:rounded-sm"
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
