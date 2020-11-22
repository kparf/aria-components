import React, { useEffect, useRef, useCallback } from "react"
import styled from "@emotion/styled"
import { Section } from "./Section"
import { AccordionContext } from "./AccordionContext"


export type Props = {
  className?: string
  children: ReturnType<typeof Section>[] | ReturnType<typeof Section>
}

const collapseOtherSections = (
  map: Map<Function, boolean>,
  exception: Function,
) => map.forEach((_, setOpen) => {
  if (exception !== setOpen) {
    setOpen(false)
    map.set(setOpen, false)
  }
})

export const Accordion: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<Map<Function, boolean>>(new Map())

  const register = useCallback((setOpen: Function, defaultOpen) => {
    ref.current.set(setOpen, defaultOpen)
    return defaultOpen
  }, [])

  const unregister = useCallback((setOpen: Function) => {
    ref.current.delete(setOpen)
  }, [])

  const toggle = useCallback((setOpen: Function) => {
    const isOpen = ref.current.get(setOpen)
    const newIsOpen = !isOpen
    ref.current.set(setOpen, newIsOpen)
    setOpen(newIsOpen)
    if (newIsOpen) {
      collapseOtherSections(ref.current, setOpen)
    }
  }, [])

  return (
    <AccordionContext.Provider value={{
      register,
      unregister,
      toggle,
    }}>
      <Container className={className}>
        {children}
      </Container>
    </AccordionContext.Provider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1em;
  border: 2px solid black;
`