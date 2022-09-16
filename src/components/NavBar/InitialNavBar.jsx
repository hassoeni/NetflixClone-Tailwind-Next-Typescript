import { useState, Fragment } from "react";
import SolidIcons from "../Icons/SolidIcons";
import { SearchIcon } from '@heroicons/react/solid'
import { useSearch, useSearchDispatch } from "../../context/SearchContext";
import Link from "next/link";
import ButtonRowContainer from "../Button/ButtonRowContainer";
import Button from "../Button/Button";
import Router from "next/router";


const someQueryFunction = () => {

}

const navigation = [
    { id: 1, name: 'Homepagina', href: '#', current: true },
    { id: 2, name: 'Series', href: '/series', current: false },
    { id: 3, name: 'Films', href: '/movies', current: false },
    { id: 4, name: 'Nieuw en Populair', href: '#', current: false },
    { id: 5, name: 'Mijn lijst', href: '#', current: false },
    { id: 6, name: 'Bladeren door talen', href: '#', current: false },
]

export default function InitialNavBar(props) {
    const [show, setShow] = useState(false)
    const dispatch = useSearchDispatch()
    const searchState = useSearch()


    const showInput = () => {
        setShow(!show)
    }

    const handleChange = (e) => {
        dispatch({
            type: 'searched',
            field: e.target.name,
            payload: e.target.value,
        })
    };

    const onTermSubmit = (e) => {
        e.preventDefault()
        props.search(searchState.searchTerm)
    }


    return (
        <nav className="flex justify-between items-center py-4 mx-auto px-4 gap-2 bg-transparent fixed top-0 z-50 w-full">
            <Link href="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    className="mx-3 sm:mx-10 w-24 pt-1 cursor-pointer" />
            </Link>
            <div className="flex gap-2 items-center">
                    <ButtonRowContainer> 
                    <Button buttonbg={'bg-red-700'} buttonring={'ring-red-500'} wFull={true} rounded={false} text="Sign In" handleClick={() => Router.push('/login')}/>
                    </ButtonRowContainer>
            </div>
        </nav>
    );
}