import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/types';

const colors = [
  { bg: '#F4EDE4', shadow: 'rgba(244, 237, 228, 0.5)' },  // beige
  { bg: '#D87C6D', shadow: 'rgba(216, 124, 109, 0.3)' },  // terracotta
  { bg: '#C9A27C', shadow: 'rgba(201, 162, 124, 0.3)' },  // light brown
];

const Card: React.FC<IProduct & { index?: number }> = ({ image, name, price, index }) => {
  const color = colors[index ? index % colors.length : 0];

  return (
    <div
      className="relative flex max-w-xs h-full flex-col overflow-hidden rounded-lg shadow-lg text-center"
      style={{ backgroundColor: color.bg, boxShadow: `0 4px 8px ${color.shadow}` }}
    >
      <div className="w-full h-40 p-2 flex justify-center items-center">
        
        <Image
          src={image}
          alt={`${name} product image`}
          width={300}
          height={300}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
          className="rounded-lg"
        />
      </div>
      <h1 className="text-xl font-semibold text-gray-900 tracking-tight p-1">{name}</h1>
      <p className="text-gray-700 mt-1 text-sm">
        Price: <span className="text-xl font-bold text-gray-900">${price}</span>
      </p>

      <div className="mt-auto p-1">
        <button className="bg-gray-900 text-white font-semibold py-1 px-3 rounded-lg hover:bg-yellow-600 transition duration-300">
          See more!
        </button>
      </div>
    </div>
  );
};

export default Card;
