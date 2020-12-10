import { useState, useEffect, useCallback, useContext, useRef, KeyboardEvent } from "react"
import { AccordionContext }  from "./AccordionContext"

export const useSectionOpen = (defaultOpen: boolean) => {
  const [open, setOpen] = useState(defaultOpen)
  const {
    register,
    unregister,
    toggle,
    onFocus,
    onBlur,
    onNextSection,
    onPreviousSection,
    onFirstSection,
    onLastSection,
  } = useContext(AccordionContext)

  const btnRef = useRef<HTMLButtonElement>(null)

  const toggleHandler = useCallback(() => {
    toggle(setOpen)
  }, [setOpen])
  const focusHandler = useCallback(() => {
    onFocus(setOpen)
  }, [setOpen])
  const blurHandler = useCallback(() => {
    onBlur(setOpen)
  }, [setOpen])


  useEffect(() => {
    setOpen(register(setOpen, btnRef, defaultOpen))
    return () => unregister(setOpen)
  }, [])

  const keyDownHandler = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    if ("ArrowDown" === e.key) {
      onNextSection(setOpen)
    }
    if ("ArrowUp" === e.key) {
      onPreviousSection(setOpen)
    }
    if ("Home" === e.key) {
      onFirstSection()
    }
    if ("End" === e.key) {
      onLastSection()
    }
  }, [onNextSection, onPreviousSection, setOpen])

  return {
    open,
    toggleHandler,
    focusHandler,
    blurHandler,
    btnRef,
    keyDownHandler,
  }
}
