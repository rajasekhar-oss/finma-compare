import {defineType, type FieldDefinition} from 'sanity'
import {en} from '../contentDefaults/en'

type ContentValue =
  | string
  | number
  | boolean
  | ContentObject
  | ContentValue[]

interface ContentObject {
  [key: string]: ContentValue
}
const titleFromKey = (key: string) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/^./, (letter) => letter.toUpperCase())

const fieldFromValue = (name: string, value: ContentValue): Record<string, unknown> => {
  const title = titleFromKey(name)

  if (typeof value === 'string') {
    return {
      name,
      title,
      type: value.length > 100 ? 'text' : 'string',
      ...(value.length > 100 ? {rows: 5} : {}),
    }
  }

  if (typeof value === 'number') return {name, title, type: 'number'}
  if (typeof value === 'boolean') return {name, title, type: 'boolean'}

  if (Array.isArray(value)) {
    const sample = value[0]
    if (typeof sample === 'object' && sample !== null && !Array.isArray(sample)) {
      return {
        name,
        title,
        type: 'array',
        of: [{type: 'object', fields: fieldsFromObject(sample as ContentObject)}],
      }
    }

    const itemType = typeof sample === 'number' ? 'number' : 'string'
    return {name, title, type: 'array', of: [{type: itemType}]}
  }

  return {
    name,
    title,
    type: 'object',
    options: {collapsible: true, collapsed: true},
    fields: fieldsFromObject(value),
  }
}
const fieldsFromObject = (value: ContentObject): FieldDefinition[] =>
  Object.entries(value).map(
    ([name, child]) =>
      fieldFromValue(name, child) as unknown as FieldDefinition,
  )

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Website Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'en',
      title: 'English',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: fieldsFromObject(en as ContentObject),
    },
    {
      name: 'fr',
      title: 'French',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: fieldsFromObject(en as ContentObject),
    },
  ],
  preview: {
    select: {title: 'title'},
  },
})
