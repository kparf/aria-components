import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Accordion, Section, AccordionProps } from "."


export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta


const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
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
);


export const Default = Template.bind({})
