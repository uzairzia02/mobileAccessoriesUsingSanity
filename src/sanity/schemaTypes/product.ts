import { defineType, defineField, defineArrayMember } from "sanity"

export const ProductSchema = defineType({
    name:'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Product Title'
        }),
        defineField({
            name: 'slug',
            type:'slug',
            title:'Slug',
            options: {
                source:'title'
            }

        }),
        defineField({
            name:'description',
            type:'string',
            title:'Product Description'
        }),
        defineField({
            name:'price',
            type:'number',
            title: 'Price'
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}]
                     
        }),
        defineField({
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [{type:'category'}]
        })
        
    ]
    
})