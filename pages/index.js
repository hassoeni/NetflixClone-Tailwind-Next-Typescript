import Head from 'next/head'
import HeaderVideo from '../src/components/Header/HeaderVideo'
import NavBar from '../src/components/NavBar/NavBar'
import React, { useState } from 'react';
import axios from 'axios'
import HorizontalListYoutube from '../src/components/HorizontalMovieList/HorizontalListYoutube'
import HorizontalListDB from '../src/components/HorizontalMovieList/HorizontalListDB'
import prisma from '../lib/prisma'
import Series from './series';

// FETCH only Comedy Movies

// FETCH ALL Movies
export async function getStaticProps() {
  const movies = await prisma.movie.findMany()
  const movielist = JSON.parse(JSON.stringify(movies))

  return {
    props: { movielist }
  }
}



export default function Home(props) {
  console.log("props", props.movielist)
  const [search, setSearch] = useState('')
  const [video, setVideo] = useState([])


  // const playVideo = e => {
  //   e.target.play();
  //   setVideoStyles({
  //     transform: "scale(2, 2)",
  //     marginLeft: "300px"
  //   });
  // }
  // const stopVideo = e => {
  //   e.target.pause();
  //   setVideoStyles({
  //     transform: "scale(1, 1)",
  //     marginLeft: 0
  //   });
  // }



  // TODO add play and stopVideo to onMouseOver Events. 
  const KEY = 'AIzaSyCBcL4D-cczyvr3WH8jgrPl5rtVcGhTymQ'


  const searchData = async (text) => {
    setSearch(text)
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: search,
        maxResults: 15,
        key: KEY
      }
    })
    setVideo(response.data.items)
  }

  // console.log('videoState', video)


  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-t from-black via-slate-900 to-slate-900 text-white scroll-smooth">
        <NavBar search={searchData} />
        <HeaderVideo />
        <HorizontalListYoutube data={video} />
        <HorizontalListDB data={props.movielist} category="Comedy" />
        <HorizontalListDB data={props.movielist} category="Fantasy" />
        <HorizontalListDB data={props.movielist} category="Animation" />
        <HorizontalListDB data={props.movielist} category="Action" />
      </div>
    </div>
  )
}
