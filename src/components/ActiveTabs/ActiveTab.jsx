import React, { useState, useRef, useEffect } from "react"
import Series from "../../../pages/series"

export default function TabsLgBasicFullWidth({serielist}) {
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 3,
    })

    const wrapperRef = useRef(null)

    return (
        <>
            {/*<!-- Basic lg sized tab full width --> */}
            <section className="max-w-full" aria-multiselectable="false">
                <ul
                    className="flex items-center border-b border-slate-200"
                    role="tablist"
                    ref={wrapperRef}
                >
                    <li className="flex-1" role="presentation ">
                        <button
                            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                }`}
                            id="tab-label-1a"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="1"
                            tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                            aria-controls="tab-panel-1a"
                            aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                        >
                            <span>Season 1</span>
                        </button>
                    </li>
                    <li className="flex-1" role="presentation ">
                        <button
                            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                }`}
                            id="tab-label-2a"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                            aria-controls="tab-panel-2a"
                            aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                        >
                            <span>Season 2</span>
                        </button>
                    </li>
                    <li className="flex-1" role="presentation ">
                        <button
                            className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                }`}
                            id="tab-label-3a"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="3"
                            tabIndex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                            aria-controls="tab-panel-3a"
                            aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                                }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
                        >
                            <span>Season 3</span>
                        </button>
                    </li>
                </ul>
                {/* !-- Displays content based on tab selection --! */}
                <div>
                    <Series serielist={serielist} seasonselected={tabSelected.currentTab}/>
                </div>
                <div className="">
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"
                            }`}
                        id="tab-panel-1a"
                        aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-1a"
                        tabindex="-1"
                    >
                        <p>
                            What is the recipe for successful achievement? To my mind there
                            are just four essential ingredients: Choose a career you love,
                            give it the best there is in you, seize your opportunities, and be
                            a member of the team.
                        </p>
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 2 ? "" : "hidden"
                            }`}
                        id="tab-panel-2a"
                        aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-2a"
                        tabindex="-1"
                    >
                        <p>
                            One must be entirely sensitive to the structure of the material
                            that one is handling. One must yield to it in tiny details of
                            execution, perhaps the handling of the surface or grain, and one
                            must master it as a whole.
                        </p>
                    </div>
                    <div
                        className={`px-6 py-4 ${tabSelected.currentTab === 3 ? "" : "hidden"
                            }`}
                        id="tab-panel-3a"
                        aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
                        role="tabpanel"
                        aria-labelledby="tab-label-3a"
                        tabindex="-1"
                    >
                        <p>
                            Even though there is no certainty that the expected results of our
                            work will manifest, we have to remain committed to our work and
                            duties; because, even if the results are slated to arrive, they
                            cannot do so without the performance of work.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
