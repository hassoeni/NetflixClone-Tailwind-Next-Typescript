import { Menu, Transition } from '@headlessui/react'
import Head from 'next/head'
import Button from '../src/components/Button/Button'
import ButtonRowContainer from '../src/components/Button/ButtonRowContainer'
import HeaderVideo from '../src/components/Header/HeaderVideo'
import NavBar from '../src/components/NavBar/NavBar'

const dummycarditems = [
  { id: 1, name: 'title one', href: '#', current: true, src: '' },
  { id: 2, name: 'title two', href: '#', current: false, src: '' },
  { id: 3, name: 'title three', href: '#', current: false, src: '' },
  { id: 4, name: 'title four', href: '#', current: false, src: '' },
  { id: 5, name: 'title five', href: '#', current: false, src: '' },
  { id: 6, name: 'title six', href: '#', current: false, src: '' },
]


const defaultEndPoint = "https://rickandmortyapi.com/api/character/"
export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
export default function Home({ data }) {
  console.log(data.results)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-t from-black text-white">
        <NavBar />
        <HeaderVideo />
        <div className="ml-4 border-md min-w-auto h-80 flex gap-4 m-2 ">
          {data.results.map(movie => (
            <>
              <img src={movie.image} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
