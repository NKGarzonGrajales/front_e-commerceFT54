import { getOrders } from '@/helpers/orders.helper';
import { IOrder, IProduct, IUserSession } from '@/types';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const OrdersView = async () => {
  const cookieStore = cookies();
  const userDataString = cookieStore.get('userData')?.value;

  if (!userDataString) {
    return redirect('/login');  
  }

  let userData: IUserSession;
  try {
    userData = JSON.parse(userDataString);
  } catch (error) {
    console.error('Error parsing userData:', error);
    return redirect('/login');  
  }

  const token = userData?.token;
  if (typeof token !== 'string') {
    return redirect('/login');
  }

  const orders: IOrder[] = await getOrders(token); 

  if (orders.length === 0) {
    return <div>No orders found.</div>; 
  }

  return (
    <div>
    {orders.length > 0 ? (
      orders.map((order) => (
        <div key={order.id} className="order">
          <p>Status: {order.status?.toUpperCase()}</p>
          <p>Date: {new Date(order.date).toLocaleString()}</p>

          <h3>Products in this order:</h3>
          <ul>
            {order.products.map((product: IProduct) => (
              <li key={product.id} className="product-item">
                    <Image
                    src={product.image}  
                    alt={product.name ? product.name : 'Product Image'}  
                    width={100}  
                    height={100} 
                    className="product-image"
                  />
                <p>Product Name: {product.name}</p>
                <p>Price: {product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p>No orders found.</p>
    )}
  </div>
);
};

export default OrdersView;