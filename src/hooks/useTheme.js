//** React Imports
import { useState, useEffect } from "react"

export const useTheme = () => {
  const initialValue = "Light"
  // ** State
  const [skin, setSkin] = useState(() => {
    try {
      // ** Get from local storage by key
      const s = localStorage.getItem("data-theme")
      return s === "" ? initialValue : s
    } catch (error) {
      // ** If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = (value) => {
    try {
      setSkin(value)
      // ** Save to local storage
      localStorage.setItem("data-theme", value)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", skin)
  }, [skin])

  return [skin, setValue]
}
