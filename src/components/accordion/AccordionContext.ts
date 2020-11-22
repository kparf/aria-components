import React from "react"

type AccordionContextProps = {
  register: (setOpen: (open: boolean) => void, defaultOpen: boolean) => boolean,
  unregister: (setOpen: (open: boolean) => void) => void,
  toggle: (setOpen: (open: boolean) => void) => void,
}
export const AccordionContext = React.createContext<AccordionContextProps>({
  register: () => false,
  unregister: () => {},
  toggle: () => {},
})