import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'


async function getData() {
    const query = `*[_type == "heroImage"][0]`

    const data = await client.fetch(query)
    return data
}

export const revalidate = 5; // Revalidate every 5 seconds

export default async function Hero() {

    const data = await getData()
  return (
    <div className="w-full h-auto bg-gradient-to-tr from-blue-800 to-blue-200 pt-5">
    <h1 className="text-4xl font-bold text-center tracking-wider">Featured Products</h1>

    <div className="w-full flex flex-wrap justify-center gap-8 px-4 md:px-8 md:py-5 md:justify-between mt-5">
        <Image
            src={urlFor(data.firstimage).url()}
            alt="Image 1"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] object-cover rounded-md"
            width={400}
            height={400}
        />
        <Image
            src={urlFor(data.secondimage).url()}
            alt="Image 2"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] object-cover rounded-md"
            width={400}
            height={400}
        />
        <Image
            src={urlFor(data.thirdimage).url()}
            alt="Image 3"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] object-cover rounded-md"
            width={400}
            height={400}
        />
    </div>
</div>

  )
}