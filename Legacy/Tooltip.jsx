import React from 'react'

export default function Tooltip() {
    return (
        <div className="p-10">
            <div className="group relative w-max">
                <button>Click me!</button>
                <span
                    className="pointer-events-none absolute -bottom-40 border-2 p-10 bg-slate-500 text-white font-bold left-0 w-max opacity-0 transition-opacity group-hover:opacity-90"
                >
                    <ul>1</ul>
                </span>
            </div>
            {/* <Menu>
                <Menu.Button>Meer</Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >

                    <Menu.Items>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active ? 'bg-blue-200 text-black' : 'bg-white text-black'
                                        }`}
                                    href="#"
                                >
                                    Documentation
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>

            </Menu> */}
        </div>
    )
}
