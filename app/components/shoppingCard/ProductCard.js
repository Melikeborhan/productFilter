"use client"
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";


const ProductCard = ({ product, truncateDescription }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
  };

  return (
    <div className=' w-72 h-full mt-4 sm:mt-32 lg:mt-10   shadow-2xl shadow-black bg-white rounded-xl flex flex-col justify-between relative '>
      <div className='relative '>
        {liked ? (
          
          <FaHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-amber-500   cursor-pointer size-5' 
          />
        ) : (
          <FaRegHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-amber-500    cursor-pointer size-5' 
          />
        )}
        <div className='flex flex-col items-center justify-between '>
          <img
            className='w-56 h-48 shadow-2xl  flex items-center   '
            src={product.image} 
            
          />
        </div>
        <div className='font-semibold py-3 ml-8 mr-5 '>
          <h2>{product.title}</h2>
        </div>
        </div>
        <div className='ml-8 '>
          <p>{truncateDescription(product.description, 4)}</p>
        </div>
        
      <div className='ml-8 mb-2 font-extrabold text-amber-500 text-start text-xl'>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
