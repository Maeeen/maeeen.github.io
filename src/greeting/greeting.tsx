import { useEffect, useState } from "preact/hooks"
import MyselfSvg from "./name.svg?react"
import "./greeting.less";

export function Greeting() {
  const [letterIdx, setLetterIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIdx(i => i + 1)
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return <>
  <MyselfSvg id="greeting" />
  </>
}