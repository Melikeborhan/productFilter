"use client"
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";


const ProductCard = ({ product, truncateDescription }) => {
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!liked);
  };

  return (
    <div className='w-96 h-auto ml-8 shadow-xl bg-white border border-amber-500  flex flex-col justify-between relative z-50'>
      <div className='relative '>
        {liked ? (
          
          <FaHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-red-500 cursor-pointer size-5' 
          />
        ) : (
          <FaRegHeart 
            onClick={handleHeartClick} 
            className='absolute top-2 right-1 text-red-500 cursor-pointer size-5' 
          />
        )}
        <div className=''>
          <img
            className='w-full h-48  '
            src={product.image} 
            alt={product.title} 
          />
        </div>
        <div className='font-bold mt-3'>
          <h2>{product.title}</h2>
        </div>
        <div className='mt-3 h-16 overflow-hidden'>
          <p>{truncateDescription(product.description, 5)}</p>
        </div>
      </div>
      <div className='font-extrabold text-amber-600 text-start text-xl'>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
