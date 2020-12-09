import React from 'react';
import { Accordion, Section, AccordionProps } from "."
import { mount } from 'enzyme'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'


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
  it.skip("Home work", () => {
    const wrapper = mount(getNewAccordion())
  })
  it.skip("End work", () => {
    const wrapper = mount(getNewAccordion())
  })
})