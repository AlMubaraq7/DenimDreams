import { useEffect } from "react"
export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  func: (value: boolean) => void,
  value: boolean,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        func(value)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
