"use client"
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";


const ProductCard = ({ product, truncateDescription }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
  };

  return (
    <div className=' w-72 h-full   ml-2 mt-4  mr-10 shadow-2xl shadow-black bg-white    flex  flex-col  justify-between relative '>
      <div className='relative '>
        {liked ? (
          
          <FaHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-amber-500 cursor-pointer size-5' 
          />
        ) : (
          <FaRegHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-amber-500 cursor-pointer size-5' 
          />
        )}
        <div className='pl-5  pr-5'>
          <img
            className='w-52 h-48 shadow-2xl ml-5  '
            src={product.image} 
            
          />
        </div>
        <div className='font-semibold mt-3 ml-5 mr-5  '>
          <h2>{product.title}</h2>
        </div>
        <div className='mt-3 h-16 overflow-hidden ml-5 mr-2'>
          <p>{truncateDescription(product.description, 5)}</p>
        </div>
      </div>
      <div className='font-extrabold text-amber-500 text-start text-xl'>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
