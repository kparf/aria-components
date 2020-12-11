import React, { useRef, useCallback } from "react"
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

type ButtonMap = Map<Function, [React.RefObject<HTMLButtonElement>, boolean]>

export const Accordion: React.FC<Props> = ({ children, className }) => {
  const accordionRef = useRef<HTMLDivElement>(null)
  const ref = useRef<ButtonMap>(new Map())
  const {
    onFocus,
    onBlur,
    isFocused,
  } = useFocusList()

  const register = useCallback((setOpen: Function, btnRef: React.RefObject<HTMLButtonElement>, defaultOpen: boolean) => {
    ref.current.set(setOpen, [btnRef, defaultOpen])
    return defaultOpen
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

  const changeFocus = (key: Function, buttonMap: ButtonMap) => {
    toggle(key, true)
    const val = buttonMap.get(key)
    if (val) {
      const [btnRef] = val
      btnRef.current?.focus()
    }
  }

  const onFirstSection = useCallback(() => {
    const FIRST = 0;
    const firstSetOpen = Array.from(ref.current.keys())[FIRST]
    if (firstSetOpen) {
      changeFocus(firstSetOpen, ref.current)
    }
  }, [])

  const onLastSection = useCallback(() => {
    const keyList = Array.from(ref.current.keys())
    const lastSetOpen = keyList[keyList.length - 1]
    if (lastSetOpen) {
      changeFocus(lastSetOpen, ref.current)
    }
  }, [])

  const onNextSection = useCallback((setOpen: Function) => {
    const keyList = Array.from(ref.current.keys())
    const nextSetOpen = keyList[keyList.indexOf(setOpen) + 1]
    if (nextSetOpen) {
      changeFocus(nextSetOpen, ref.current)
    }
  }, [])
  const onPreviousSection = useCallback((setOpen: Function) => {
    const keyList = Array.from(ref.current.keys())
    const prevSetOpen = keyList[keyList.indexOf(setOpen) - 1]
    if (prevSetOpen) {
      changeFocus(prevSetOpen, ref.current)
    }
  }, [])

  const unregister = useCallback((setOpen: Function) => {
    ref.current.delete(setOpen)
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
      onFirstSection,
      onLastSection,
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