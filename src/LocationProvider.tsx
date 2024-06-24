import { AnimatePresence } from "framer-motion"
import React from "react"
interface Props {
  children: React.ReactNode
}
const LocationProvider = ({ children }: Props) => {
  return <AnimatePresence>{children}</AnimatePresence>
}

export default LocationProvider
