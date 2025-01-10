import { type SchemaTypeDefinition } from 'sanity'
import { ProductSchema } from './product'
import { Category } from './category'
import { HeroImages } from './heroimages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema, Category, HeroImages],
}
