'use client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'


interface ImagesGalaeryInterface {
    images:any
}

export const revalidate = 5; // Revalidate every 5 seconds


export default function ImageGalery({images}:ImagesGalaeryInterface) {
    const [bigImage, setBigImage] = useState(images[0])

    const handleSmallImageClick = (image:any) => {
        setBigImage(image)
    }

  return (
    <div className='grid gap-4 lg:grid-cols-5 ' >
        <div className='order-last flex gap-4 lg:order-none lg:flex-col ' >
            {/* map our images here */}

                {images.map((image:any, idx:any) => (
                    <div
                        key={idx} className='overflow-hidden rounded-lg bg-gray-100  '
                    >
                        <Image src={urlFor(image).url()} width={200} height={200} alt='photo' 
                        className='object-cover object-center cursor-pointer w-[200px] h-[200px] ' 
                        onClick={()=> handleSmallImageClick(image)}
                        >

                        </Image>

                    </div>

                ) )}
        </div>
        <div className='relative overflow-hidden rounded-lg lg:col-span-4'>
            <Image src={urlFor(bigImage).url()} alt='big Image' width={800} height={800} 
            className='h-[700px] w-[700px] bg-gray-100 object-cover object-center ' ></Image>

            <span className='absolute left-0 top-0 px-3 py-1 uppercase tracking-wider bg-red-500 text-white' > Sale </span>
        </div>

      
    </div>
  )
}
