// 'use client';
// import React, { useState } from 'react';
// import FeaturedProducts from './FeaturedProducts';
// import Cart from './Cart';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: any; // Update based on your image import type
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// export default function Shop() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addInCart = (product: Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="flex">
//       <div className="w-full">
//         <FeaturedProducts addInCart={addInCart} />
//       </div>
//       <div className="w-[500px]">
//         <Cart cartItems={cartItems} />
//       </div>
//     </div>
//   );
// }
