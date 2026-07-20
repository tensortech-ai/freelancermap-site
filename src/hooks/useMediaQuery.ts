import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)
    listener()
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export function usePreloader(duration = 1200) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), duration)
    return () => window.clearTimeout(timer)
  }, [duration])

  return loading
}

export function useTypingEffect(words: string[], typingSpeed = 80, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]
    let timeout: number

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex))
        if (charIndex === currentWord.length) {
          timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration)
        } else {
          setCharIndex((prev) => prev + 1)
        }
      }, typingSpeed)
    } else if (isDeleting && charIndex >= 0) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex))
        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        } else {
          setCharIndex((prev) => prev - 1)
        }
      }, typingSpeed / 2)
    }

    return () => window.clearTimeout(timeout)
  }, [words, wordIndex, charIndex, isDeleting, typingSpeed, pauseDuration])

  return displayText
}
