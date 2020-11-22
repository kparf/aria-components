import { useState, useEffect, useCallback, useContext } from "react"
import { AccordionContext }  from "./AccordionContext"

export const useSectionOpen = (defaultOpen: boolean) => {
  const [open, setOpen] = useState(defaultOpen)
  const { register, unregister, toggle } = useContext(AccordionContext)
  const toggleHandler = useCallback(() => {
    toggle(setOpen)
  }, [setOpen])

  useEffect(() => {
    setOpen(register(setOpen, defaultOpen))
    return () => unregister(setOpen)
  }, [])

  return {
    open,
    toggleHandler,
  }
}
