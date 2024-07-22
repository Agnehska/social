import React from 'react'

const VideoFile = ({movie}) => {
  return (
    <div className="w-150 rounded-lg shadow-lg bg-white max-w-sm">
      <iframe wwidth="320" height="240" className="w-full rounded-t-lg" src={movie.filename} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{movie.title}</h5>
          <p className="text-gray-700 text-base mb-4">
              {movie.description}
          </p>
      </div>
    </div>
  )
}

export default VideoFile;