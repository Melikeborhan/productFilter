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
    <div className='flex justify-end'>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-20 mb-10 mt-10 '>
      {data.slice(0, 18).map((product) => (
        <ProductCard 
          key={product.id} 
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