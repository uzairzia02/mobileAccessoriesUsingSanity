

import { defineType, defineField, defineArrayMember } from "sanity"

export const HeroImages = defineType({
    name:"heroImage",
    type:'document',
    title: 'Three Hero Images',
    fields: [
        defineField({
            name: 'firstimage',
            title:'First Image',
            type: 'image'
        }),
        defineField({
            name: 'secondimage',
            title:'Second Image',
            type: 'image'
        }),
        defineField({
            name: 'thirdimage',
            title:'Third Image',
            type: 'image'
        }),

    ]})