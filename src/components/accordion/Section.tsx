import React, { useRef, useCallback, KeyboardEvent } from "react"
import styled from "@emotion/styled"
import { useSectionOpen } from "./useSectionOpen"


export type SetOpen = (open: boolean) => void
export type Props = {
  id: string
  title: string
  className?: string
  defaultOpen?: boolean
}
const getSectionId = (id: string) => `section-${id}`
const getHeaderId = (id: string) => `header-${id}`

export const Section: React.FC<Props> = ({
  id,
  title,
  className,
  children,
  defaultOpen = false
}) => {
  const {
    open,
    toggleHandler,
    focusHandler,
    blurHandler,
    keyDownHandler,
    btnRef,
  } = useSectionOpen(defaultOpen)

  return (
    <Container
      className={className}
    >
      <h3>
        <HeaderButton
          ref={btnRef}
          onClick={toggleHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onKeyDown={keyDownHandler}
          aria-expanded={open}
          aria-controls={getSectionId(id)}
          id={getHeaderId(id)}
        >
          {title}
        </HeaderButton>
      </h3>
      <SectionContent
        role="region"
        id={getSectionId(id)} open={open}
        aria-labelledby={getHeaderId(id)}
      >
        {children}
      </SectionContent>
    </Container>
  )
}

export const Container = styled.div`
  padding: 1em;
`

export const HeaderButton = styled.button`
  --focus-color: #3d7e9a;
  font-size: 1em;
  border: none;
  background: transparent;
  outline-color: var(--focus-color);
`

export const SectionContent = styled.div<{ open?: boolean }>`
  ${ props => !props.open && `display: none;` }
`
