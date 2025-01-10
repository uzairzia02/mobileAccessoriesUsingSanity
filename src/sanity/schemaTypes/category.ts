import { defineType, defineField, defineArrayMember } from "sanity"

export const Category = defineType({
    name:"category",
    type:'document',
    title: 'Categories',
    fields: [
        defineField({
            name: 'name',
            title:'Name of Category',
            type: 'string'
        })
    ]})