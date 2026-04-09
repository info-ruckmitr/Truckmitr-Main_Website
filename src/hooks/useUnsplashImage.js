import { useMemo, useState } from 'react'
import { IMAGES } from '@utils/constants'

/**
 * Resolve a static Unsplash URL from IMAGES[key] or use a direct URL.
 * @param {keyof typeof IMAGES | string} keyOrUrl
 */
export function useUnsplashImage(keyOrUrl) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const src = useMemo(() => {
    if (!keyOrUrl) return ''
    if (typeof keyOrUrl === 'string' && keyOrUrl.startsWith('http')) return keyOrUrl
    return IMAGES[keyOrUrl] ?? ''
  }, [keyOrUrl])

  return {
    src,
    loaded,
    error,
    onLoad: () => setLoaded(true),
    onError: () => setError(true),
  }
}
