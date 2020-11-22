import React from "react"
import styled from "@emotion/styled"
import { useSectionOpen } from "./useSectionOpen"


export type SetOpen = (open: boolean) => void
export type Props = {
  title: string
  className?: string
  defaultOpen?: boolean
}
export const Section: React.FC<Props> = ({
  title,
  className,
  children,
  defaultOpen = false
}) => {
  const {
    open,
    toggleHandler,
  } = useSectionOpen(defaultOpen)

  return (
    <Container className={className}>
      <h3>
        <HeaderButton
          onClick={toggleHandler}
        >
          {title}
        </HeaderButton>
      </h3>
      <SectionContent open={open}>
        {children}
      </SectionContent>
    </Container>
  )
}

export const Container = styled.div`
  padding: 1em;
`

export const HeaderButton = styled.button`
  font-size: 1em;
  border: none;
  background: transparent;
`

export const SectionContent = styled.div<{ open?: boolean }>`
  ${ props => !props.open && `display: none;` }
`
