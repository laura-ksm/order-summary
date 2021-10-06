import React from 'react';

const ImageCard = ({ image }) => {

  return (
    <div className="max-w-sm mx-auto pt-1 rounded-xl overflow-hidden shadow-lg">
      <img src={image.hero} alt="" className="w-full"/>
      <div className="px-9 py-7 max-w-sm mx-auto bg-white shadow-md content-center">
        <div className="text-blue-900	font-bold text-2xl text-center">Order Summary</div>
        <div className="text-gray-500 text-center text-sm	py-5">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</div>
        <div className="max-w-sm rounded-xl bg-indigo-50 bg-opacity-95 flex p-4">
          <img className="h-9 w-9" src={image.icon} alt=""/>
          <div>
            <div className="text-blue-900 text-sm font-bold pl-5">Annual Plan</div>
            <div className="text-gray-500 text-sm pl-5">$59.99/year</div>
          </div>
          <div className="text-indigo-700	hover:text-indigo-500 ... text-sm font-semibold py-3 pl-12 ml-12">Change</div>
        </div>
        <div className="bg-indigo-700 hover:bg-indigo-500 ... rounded-xl shadow-2xl p-3 my-5 text-white text-sm text-center	font-bold">Proceed to Payment</div>
        <div className="text-gray-500 hover:text-gray-700 ... text-sm font-bold text-center">Cancel Order</div>
      </div>
    </div>
  )

}

export default ImageCard;
