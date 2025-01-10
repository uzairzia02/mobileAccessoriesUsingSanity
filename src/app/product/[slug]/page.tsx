import ImageGalery from '@/app/components/imagegalery';
import Navbar from '@/app/components/navbar'
import { FullProduct } from '@/app/interface';
import { client } from '@/sanity/lib/client';
import { FaStar } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";





import React from 'react'
import { urlFor } from '@/sanity/lib/image';


async function getData(slug:string) {
    const query = `
    *[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    price,
    title,
    description,
    "slug": slug.current,
    image,
    "categoryName": category->name
}`;

const data = await client.fetch(query)
return data
    
}



export const revalidate = 5; // Revalidate every 5 seconds

export default async function ProductPage({params}: {params : {slug:string}} ) {

    const data:FullProduct = await getData(params.slug)
  return (
    <div>
      
        <Navbar />
       <div className='mt-16 flex ' >

        <ImageGalery images = {data.image} />
        <div className='py-10'>
          <div className='mb-2 space-y-10'>
            <span className=' text-xl  ' >{data.categoryName} </span>
            <h2 className='text-3xl font-bold ' > {data.title} </h2>
            <div className='flex items-center gap-x-5 ' > 
              <button className=' rounded-xl bg-blue-600 flex gap-x-2 px-5 items-center py-1 ' >
                <span className='text-lg text-white ' >4.5</span>
                <FaStar className=' ' />

              </button>

              <p className='text-lg ' >101 Ratings </p>
            </div>
            <div className='space-y-10 ' >
              <div className='flex items-center gap-x-5 ' >
                <p className='text-2xl font-bold text-gray-900 ' > ${data.price} </p>
                <p className='line-through text-gray-400 ' > ${data.price + 50} </p>
               
              </div>
              <p className='text-sm  text-gray-600 w-[650px] tracking-wide text-justify '> {data.description} </p>

              <div className='flex w-[600px] justify-between ' >
                <div className=' ' >
                <FaExchangeAlt className='w-[70px] h-[70px] '  />
                <p className='grid text-center ' >7 Days <span>Exchange</span>  </p>
                </div>

                <div className=' ' >
                <FaHandshake className='w-[70px] h-[70px] '  />
                <p className='grid text-center '>1 Year <span>Warranty</span>  </p>
                </div>

                <div className=' ' >
                <FaTruck className='w-[70px] h-[70px] '  />
                <p className='grid text-center '>Free <span>Shipping</span>  </p>
                </div>

                <div className=' ' >
                <RiSecurePaymentFill className='w-[70px] h-[70px] '  />
                <p className='grid text-center '>Secure <span>Payment</span> </p>
                </div>
              </div>

             
            </div>
            <div className='flex space-x-10 ' >
            <button
                className="snipcart-add-item px-6 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-400 duration-200"
                data-item-id={data._id}
                data-item-name={data.title}
                data-item-price={data.price}
                data-item-description={data.description}
                data-item-url={`/product/${data.slug}`} // Replace with actual product URL
                data-item-image={urlFor(data.image[0]).url()} // Replace with image URL if applicable
              > Add to Cart
                </button>

                <button 
                className="snipcart-checkout px-6 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-400 duration-200"
                >
                  Buy Now
                </button>
              </div>


          </div>

        </div>
        
       </div>

    </div>
    
  )
}
