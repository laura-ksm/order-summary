import React from 'react';

const ImageCard = ({ image }) => {

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg items-center">
      <img src={image.hero} alt="" className="w-full"/>
      <div className="p-12 max-w-sm mx-auto bg-white shadow-md content-center">
        <div className="text-blue-900	font-bold text-2xl text-center">Order Summary</div>
        <div className="text-gray-500 text-center text-sm	py-6">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</div>
        <div className="max-w-sm rounded-md bg-indigo-50 bg-opacity-95 flex p-4">
          <img className="h-9 w-9" src={image.icon} alt=""/>
          <div>
            <div className="text-blue-900 text-sm font-bold pl-5">Annual Plan</div>
            <div className="text-gray-500 text-sm pl-5">$59.99/year</div>
          </div>
          <div className="text-blue-800	text-sm font-bold">Change</div>
        </div>
      </div>
    </div>
  )

}

export default ImageCard;
