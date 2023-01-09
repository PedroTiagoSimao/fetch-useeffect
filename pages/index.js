import { useEffect, useState } from "react"

export default function Home() {
  const [quote, setQuote] = useState('')

  const getQuote = async () => {
    const res = await fetch('https://www.tronalddump.io/random/quote')
    const data = res.json()
    setQuote(data)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
  <>
    {quote}
  </>  
  )
}