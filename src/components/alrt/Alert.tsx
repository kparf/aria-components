import React from "react"
import styled from "@emotion/styled"


export const Alert: React.FC = ({ children }) => {
  return (
    <Container role="alert">
      {children}
    </Container>
  )
}

const Container = styled.div`
  padding: 1em;
  border-radius: 1em;
  border: 2px solid black;
`