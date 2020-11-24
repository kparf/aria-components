import React, { useRef, useCallback, ReactElement } from "react"
import styled from "@emotion/styled"
import { Section } from "./Section"
import { AccordionContext } from "./AccordionContext"
import { useFocusList } from "./useFocusList"


export type Props = {
  className?: string
  children: ReturnType<typeof Section>[] | ReturnType<typeof Section>
}

const collapseOtherSections = (
  map: Map<Function, [React.RefObject<HTMLButtonElement>, boolean]>,
  exception: Function,
) => map.forEach(([btnRef, _], setOpen) => {
  if (exception !== setOpen) {
    setOpen(false)
    map.set(setOpen, [btnRef, false])
  }
})

export const Accordion: React.FC<Props> = ({ children, className }) => {
  const accordionRef = useRef<HTMLDivElement>(null)
  const ref = useRef<Map<Function, [React.RefObject<HTMLButtonElement>, boolean]>>(new Map())
  const {
    onFocus,
    onBlur,
    isFocused,
  } = useFocusList()

  const register = useCallback((setOpen: Function, btnRef: React.RefObject<HTMLButtonElement>, defaultOpen: boolean) => {
    ref.current.set(setOpen, [btnRef, defaultOpen])
    return defaultOpen
  }, [])

  const onNextSection = useCallback((setOpen: Function) => {
    const keyList = Array.from(ref.current.keys())
    const nextSetOpen = keyList[keyList.indexOf(setOpen) + 1]
    if (nextSetOpen) {
      toggle(nextSetOpen, true)
      const val = ref.current.get(nextSetOpen)
      if (val) {
        const [btnRef] = val
        btnRef.current?.focus()
      }
    }
  }, [])
  const onPreviousSection = useCallback((setOpen: Function) => {
    const keyList = Array.from(ref.current.keys())
    const prevSetOpen = keyList[keyList.indexOf(setOpen) - 1]
    if (prevSetOpen) {
      toggle(prevSetOpen, true)
      const val = ref.current.get(prevSetOpen)
      if (val) {
        const [btnRef] = val
        btnRef.current?.focus()
      }
    }
  }, [])

  const unregister = useCallback((setOpen: Function) => {
    ref.current.delete(setOpen)
  }, [])

  const toggle = useCallback((setOpen: Function, isForceOpen?: boolean) => {
    const val = ref.current.get(setOpen)
    if (val) {
      const [btnRef, isOpen] = val
      const newIsOpen = isForceOpen === undefined ? !isOpen : isForceOpen
      ref.current.set(setOpen, [btnRef, newIsOpen])
      setOpen(newIsOpen)
      if (newIsOpen) {
        collapseOtherSections(ref.current, setOpen)
      }
    }
  }, [])

  return (
    <AccordionContext.Provider value={{
      register,
      unregister,
      toggle,
      onFocus,
      onBlur,
      onNextSection,
      onPreviousSection,
    }}>
      <Container
        isFocused={isFocused}
        className={className}
        ref={accordionRef}
      >
        {children}
      </Container>
    </AccordionContext.Provider>
  )
}

const Container = styled.div<{ isFocused?: boolean }>`
  --focus-color: #3d7e9a;
  display: flex;
  flex-direction: column;
  border-radius: 1em;
  border: 2px solid black;
  ${(props) => props.isFocused && `border-color: var(--focus-color)`}
`