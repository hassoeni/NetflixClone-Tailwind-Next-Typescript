import React from 'react'
import ReactPlayer from 'react-player'
export default function Episode() {
  return (
    <div className="w-screen h-screen">

      <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'  playing width={1920} height={1080} pip={true}/>
    </div>
  )
}
