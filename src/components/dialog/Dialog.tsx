import React, { useState } from "react"
import styled from "@emotion/styled"

export type Props = {
  className?: string
}

export const Dialog: React.FC<Props> = ({ className, children }) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

const Container = styled.div`
`
