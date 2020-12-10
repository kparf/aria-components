import React from "react"
type SetOpenFn = (open: boolean) => void
type AccordionContextProps = {
  register: (setOpen: SetOpenFn, btnRef: React.RefObject<HTMLButtonElement> , defaultOpen: boolean) => boolean,
  unregister: (setOpen: SetOpenFn) => void,
  toggle: (setOpen: SetOpenFn) => void,
  onFocus: (setOpen: SetOpenFn) => void
  onBlur: (setOpen: SetOpenFn) => void
  onNextSection: (setOpen: SetOpenFn) => void
  onPreviousSection: (setOpen: SetOpenFn) => void
  onFirstSection: () => void
  onLastSection: () => void
}
export const AccordionContext = React.createContext<AccordionContextProps>({
  register: () => false,
  unregister: () => {},
  toggle: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onNextSection: () => {},
  onPreviousSection: () => {},
  onFirstSection: () => {},
  onLastSection: () => {},
})