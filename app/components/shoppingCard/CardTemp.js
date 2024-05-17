"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardTemp = () => {
  const [loading, setLoading] = useState(true); // Başlangıçta yükleniyor durumunu true yapıyoruz
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: " https://api.escuelajs.co/api/v1/products",
    })
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false)); // Veri çekme işlemi tamamlandığında yüklenme durumunu false yapıyoruz
  }, []);
  console.log(data);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pl-64'>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        data.map((product) => (
          <div key={product.id} >//className="id"
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.images} alt={product.title} />
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CardTemp;
