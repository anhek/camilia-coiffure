import React from 'react';
import GoogleLogo from './googleLogo';
import FacebookLogo from './facebookLogo';
import { MdStar, MdStarHalf } from "react-icons/md"

const BadgeReview = ({name, rate, totalReview}) => { 

  return (
    <div className="w-32 p-3 mx-1 mb-3 text-center bg-white rounded-lg text-brown badge md:mx-0">
      <p>Avis sur</p>
      { name === 'Google' ? <GoogleLogo className="mb-2"/> : <FacebookLogo className="mt-1 mb-4" />}
      <p className="mb-0 text-4xl leading-none font-branbold">{rate}/5</p>
      <div className="flex justify-center text-2xl text-yellow-500 stars">
        <MdStar/><MdStar/><MdStar/><MdStar/><MdStarHalf/>
      </div>
      <p>(sur {totalReview} avis)</p>
    </div>
  );
}
 
export default BadgeReview;