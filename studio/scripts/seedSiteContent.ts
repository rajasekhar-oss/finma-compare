import {getCliClient} from 'sanity/cli'
import {en} from '../contentDefaults/en'
import {fr} from '../contentDefaults/fr'

const withKeys = (value: unknown, path = 'content'): unknown => {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      const converted = withKeys(item, `${path}-${index}`)
      if (converted && typeof converted === 'object' && !Array.isArray(converted)) {
        return {_key: `${path}-${index}`.replace(/[^a-zA-Z0-9_-]/g, '-'), ...converted}
      }
      return converted
    })
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, withKeys(child, `${path}-${key}`)]),
    )
  }

  return value
}

const client = getCliClient({apiVersion: '2026-07-22'})

async function seed() {
  await client.createOrReplace({
    _id: 'siteContent',
    _type: 'siteContent',
    title: 'FINMA Website Content',
    en: withKeys(en, 'en'),
    fr: withKeys(fr, 'fr'),
  })

  console.log('FINMA website content imported successfully.')
}

seed().catch((error) => {
  console.error('Content import failed:', error)
  process.exit(1)
})