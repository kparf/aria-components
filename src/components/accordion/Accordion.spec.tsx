import React from 'react';
import { Accordion, Section } from "."
import { render, fireEvent, screen } from '@testing-library/react'


const getNewAccordion = () => (
  <Accordion>
    <Section
      id="panel1"
      title="Personal Information"
    >
      <form>
        <label>
          Name: <input name="email"/>
        </label>
        <br />
        <label>
          Email: <input name="email"/>
        </label>
      </form>
    </Section>
    <Section
      id="panel2"
      title="Personal Information 2"
    >
      <form>
        <label>
          Name: <input name="email"/>
        </label>
        <br />
        <label>
          Email: <input name="email"/>
        </label>
      </form>
    </Section>
    <Section
      id="panel3"
      title="Personal Information 3"
    >
      <form>
        <label>
          Name: <input name="email"/>
        </label>
        <br />
        <label>
          Email: <input name="email"/>
        </label>
      </form>
    </Section>
  </Accordion>
)

describe("Accordion Accessibility Features", () => {
  it("Down Arrow work", () => {
    render(getNewAccordion())
    const firstHeaderButton = screen.getByText("Personal Information")
    const secondHeaderButton = screen.getByText("Personal Information 2")

    firstHeaderButton.focus()
    expect(firstHeaderButton).toHaveFocus()
    fireEvent.keyDown(firstHeaderButton, { key: "ArrowDown" })
    expect(secondHeaderButton).toHaveFocus()
  })
  it("Up Arrow work", () => {
    render(getNewAccordion())
    const firstHeaderButton = screen.getByText("Personal Information")
    const secondHeaderButton = screen.getByText("Personal Information 2")

    secondHeaderButton.focus()
    expect(secondHeaderButton).toHaveFocus()
    fireEvent.keyDown(secondHeaderButton, { key: "ArrowUp" })
    expect(firstHeaderButton).toHaveFocus()
  })
  it("Home work", () => {
    render(getNewAccordion())
    const thirdHeaderButton = screen.getByText("Personal Information 3")
    const secondHeaderButton = screen.getByText("Personal Information 2")

    secondHeaderButton.focus()
    expect(secondHeaderButton).toHaveFocus()
    fireEvent.keyDown(secondHeaderButton, { key: "End" })
    expect(thirdHeaderButton).toHaveFocus()
  })
  it("End work", () => {
    render(getNewAccordion())
    const firstHeaderButton = screen.getByText("Personal Information")
    const secondHeaderButton = screen.getByText("Personal Information 2")

    secondHeaderButton.focus()
    expect(secondHeaderButton).toHaveFocus()
    fireEvent.keyDown(secondHeaderButton, { key: "Home" })
    expect(firstHeaderButton).toHaveFocus()
  })
})