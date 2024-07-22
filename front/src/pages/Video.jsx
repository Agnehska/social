import React, { useState, useEffect } from 'react';
import VideoFile from '../components/VideoFile';

export const Video = () => {
  const [video, setvideo] = useState([])

  useEffect(() => {
      fetch('http://localhost:5000/api/video')
      .then(data => data.json())
      .then(info => setvideo(info.files))
    }, [])
  return (
    <div className="flex justify-between gap-0.5 gap-y-5 flex-wrap pt-4">
      {video.map(movie => {
        return (
          <VideoFile key={movie._id} movie={movie}/>
        )
      })}
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
              <video width="320" height="240" controls className="w-full rounded-t-lg">
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
          </a>
          <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
              <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
              </p>
          </div>
      </div>
    </div>
  )
}
