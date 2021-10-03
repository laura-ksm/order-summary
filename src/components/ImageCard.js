import React from 'react';

const ImageCard = ({ image }) => {

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img src={image} alt="" className="w-full"/>
      <div className="p-12 max-w-sm mx-auto bg-white shadow-md content-center">
          <div className="font-bold text-xl">Order Summary</div>
      </div>
    </div>
  )

}

export default ImageCard;
