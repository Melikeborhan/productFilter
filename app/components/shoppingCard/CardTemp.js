"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const CardTemp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
  }, []);
  
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className='flex items-center justify-center'>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='grid sm:grid-cols-1 lg:grid-cols-4  ml-10 mr-7 gap-20 lg:mb-10 lg:mt-10 '>
      {data.slice(0,20).map((product) => (
        <ProductCard 
          key={product.id} 
          src={product.image} 
          product={product} 
          truncateDescription={truncateDescription} 
        />
      ))}
    </div>
     
      )}
    </div>
  );
};

export default CardTemp;