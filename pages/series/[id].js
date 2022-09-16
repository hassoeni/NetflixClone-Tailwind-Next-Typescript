import React from 'react'
import ReactPlayer from 'react-player'
import prisma from '../../lib/prisma'




export default function Episode({episodeprops}) {
  return (
    <div className="w-screen h-screen">

      <ReactPlayer url={episodeprops[0].url}  playing width={1920} height={1080} pip={true}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {id} = context.params
  const episodedetail = await prisma.serie.findMany({
    where: { episodeid: parseInt(id) }
  })
  const episodeprops = JSON.parse(JSON.stringify(episodedetail))
  return {
    props:{
      episodeprops
    }
  }
}