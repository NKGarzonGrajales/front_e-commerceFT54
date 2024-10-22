import React from 'react';
import Card from '../Card/Card';
import Link from 'next/link';
import { IProduct } from '@/types';

interface CardListProps {
  products: IProduct[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <div className="w-85% px-6 py-3 mr-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-15 mt-10 overflow-x-scroll">
        {products.map((product, index) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card {...product} index={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;




