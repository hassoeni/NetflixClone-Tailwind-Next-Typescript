import React, { useState, useRef, useEffect } from 'react'
import Series from '../../../pages/series'

export default function TabsLgBasicFullWidth({ serielist, isAmovie }) {
	const [tabSelected, setTabSelected] = useState({
		currentTab: 1,
		noTabs: 3,
	})

	let numberofseasons = 6

	const wrapperRef = useRef(null)
	const navigation = [
		{
			id: 1,
			identifier: 'tab-label-1a',
			role: 'tab',
			ariasetsize: '3',
			ariaposinset: '1',
			ariacontrols: 'tab-label-1a',
		},
		{
			id: 2,
			identifier: 'tab-label-2a',
			role: 'tab',
			ariasetsize: '3',
			ariaposinset: '2',
			ariacontrols: 'tab-panel-2a',
		},
	]

	
	return (
		<>
			{isAmovie ? (
				<section className="max-w-full" aria-multiselectable="false">
					<ul
						className="flex items-center border-b border-slate-200"
						role="tablist"
						ref={wrapperRef}
					>
						<>
							{navigation.map((navitems) => (
								<li key={navitems.id} className="flex-1" role="presentation ">
									<button
										className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 
                                        px-6 text-sm font-medium tracking-wide transition duration-300 
                            		  hover:bg-red-50 hover:stroke-red-600 focus:bg-red-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === navitems.id
												? 'border-red-500 stroke-red-500 text-red-500 hover:border-red-600  hover:text-red-600 focus:border-red-700 focus:stroke-red-700 focus:text-red-700 disabled:border-slate-500'
												: 'justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-red-500 hover:text-red-500 focus:border-red-600 focus:stroke-red-600 focus:text-red-600 disabled:text-slate-500'
											}`}
										id={navitems.identifier}
										role={navitems.role}
										aria-setsize={navitems.ariasetsize}
										aria-posinset={navitems.ariaposinset}
										tabIndex={`${tabSelected.currentTab === navitems.id ? '0' : '-1'
											}`}
										aria-controls={navitems.ariacontrols}
										aria-selected={`${tabSelected.currentTab === navitems.id ? 'true' : 'false'
											}`}
										onClick={() =>
											setTabSelected({
												...tabSelected,
												currentTab: navitems.id,
											})
										}
									>
										<span>Season {navitems.id}</span>
									</button>
								</li>
							))}
						</>
					</ul>
					{/* !-- Displays content based on tab selection --! */}
					<div className='mt-4'>
						<Series
							serielist={serielist}
							seasonselected={tabSelected.currentTab}
						/>
					</div>
				</section>
			) : (
				<></>
			)}
		</>
	)
}
