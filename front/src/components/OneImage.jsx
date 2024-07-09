import React from 'react'

const OneImage = ({ image }) => {

  return (
    <div className="group cursor-pointer relative" >
            <img
              src={`http://localhost:5000/${image.filename}`}
              alt="Images"
              className={`w-11/12 h-48 object-cover rounded-lg transition-transform  scale-100 group-hover:scale-125`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
          </div>
  )
}

export default OneImage