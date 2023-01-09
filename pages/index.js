import { useEffect, useState } from "react"

export default function Home() {
  const [quote, setQuote] = useState('')

  const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes')
    const data = res.json()
    setQuote(res)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
  <>
    {quote.map((q) => {
      <div>
        <p>{q.text}</p>
        <p>{q.author}</p>
      </div>
    })}
  </>  
  )
}