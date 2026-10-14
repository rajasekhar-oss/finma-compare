import {useEffect, useState} from 'react'
import {en} from '@/i18n/en'
import {fr} from '@/i18n/fr'
import {sanityClient} from '@/lib/sanity'
import {siteContentQuery} from '@/lib/siteContentQuery'

export type SiteTranslations = typeof en

type SiteContent = {
  en?: Partial<SiteTranslations>
  fr?: Partial<SiteTranslations>
}

const fallbackContent: Record<'en' | 'fr', SiteTranslations> = {en, fr}

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)

const mergeContent = <T,>(fallback: T, cms: unknown): T => {
  if (cms === undefined || cms === null) return fallback
  if (Array.isArray(cms)) return cms as T

  if (isObject(fallback) && isObject(cms)) {
    const merged: Record<string, unknown> = {...fallback}
    for (const [key, value] of Object.entries(cms)) {
      merged[key] = mergeContent(merged[key], value)
    }
    return merged as T
  }

  return cms as T
}

export function useSiteContent() {
  const [content, setContent] = useState(fallbackContent)

  useEffect(() => {
    // Temporarily disabled Sanity fetch to force usage of local en.ts/fr.ts files
    /*
    let active = true

    sanityClient
      .fetch<SiteContent | null>(siteContentQuery)
      .then((cms) => {
        if (!active || !cms) return
        setContent({
          en: mergeContent(en, cms.en),
          fr: mergeContent(fr, cms.fr),
        })
      })
      .catch((error) => {
        console.error('Unable to load Sanity website content:', error)
      })

    return () => {
      active = false
    }
    */
  }, [])

  return content
}
