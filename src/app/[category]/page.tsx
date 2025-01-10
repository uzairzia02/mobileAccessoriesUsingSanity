import { client } from '@/sanity/lib/client';
import React from 'react';
import { FullProduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"]{
      _id,
      "imageURL": image[0].asset->url,
      price,
      title,
      "slug": slug.current,
      "categoryName": category->name
    }`;

    const data = await client.fetch(query);
    return data;
}

export const revalidate = 5; // Revalidate every 5 seconds

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const data: FullProduct[] = await getData(params.category);

    return (
        <div>
            <Navbar />
            <div className="w-full py-8 mt-16">
                <h2 className="text-4xl md:text-5xl my-10 font-bold text-center tracking-wider">
                    {params.category}
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 sm:px-10">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            {/* Product Image */}
                            <div className="w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-80 transition-opacity duration-300">
                                <Image
                                    src={product.imageURL}
                                    alt="product Image"
                                    className="object-cover object-center h-[200px] w-full"
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="mt-4 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <Link href={`/product/${product.slug}`} className="hover:underline">
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">{product.categoryName}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">$ {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
