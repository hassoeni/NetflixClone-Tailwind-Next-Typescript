import { useState, Fragment } from "react";
import SolidIcons from "../Icons/SolidIcons";
import { SearchIcon } from '@heroicons/react/solid'

const navigation = [
    { id: 1, name: 'Homepagina', href: '#', current: true },
    { id: 2, name: 'Series', href: '#', current: false },
    { id: 3, name: 'Films', href: '#', current: false },
    { id: 4, name: 'Nieuw en Populair', href: '#', current: false },
    { id: 5, name: 'Mijn lijst', href: '#', current: false },
    { id: 6, name: 'Bladeren door talen', href: '#', current: false },
]


export default function NavBar() {
    const [show, setShow] = useState(false)

    const showInput = () => {
        setShow(!show)
    }



    return (
        <nav className="flex justify-between items-center py-4 mx-auto px-4 gap-2 bg-transparent fixed top-0 z-50 w-full">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                className="mx-10 w-24 pt-1" />

            <ul className="flex gap-4 flex-1">
                {navigation.map(navitems => (
                    <li key={navitems.id} className="delay-150 hover:text-slate-600 hover:transition-transform hover:scale-100 cursor-pointer ease-in-out font-semibold"><a href={navitems.href} current={navitems.current}>{navitems.name}</a></li>
                ))}
            </ul>
            <div className="flex gap-2 items-center">
                {(show ? <input className="border-lg w-full bg-slate-700 px-2  py-1 text-white border-white border-1" /> : <></>)}
                <div onClick={showInput} className="">
                    <SolidIcons icon={"SearchIcon"} />
                </div>
                <SolidIcons icon={"BellIcon"} />
                <SolidIcons icon={"UserIcon"} />
            </div>
        </nav>
    );
}