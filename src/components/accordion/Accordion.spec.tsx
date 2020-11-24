import React from 'react';
import { Accordion, Section, AccordionProps } from "."
import { mount } from 'enzyme'


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
    const wrapper = mount(getNewAccordion())
  })
  it("Up Arrow work", () => {
    const wrapper = mount(getNewAccordion())
  })
  it("Home work", () => {
    const wrapper = mount(getNewAccordion())
  })
  it("End work", () => {
    const wrapper = mount(getNewAccordion())
  })
})