import React, { useState, useCallback, FormEvent, useRef } from "react"
import styled from "@emotion/styled"
import { Breadcrumbs } from "./Breadcrumbs"
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as Meta

const Template: Story = (args) => (<Breadcrumbs links={[
  {
    label: "Breadcrumb 1",
    link: "/#link1"
  },
  {
    label: "Breadcrumb 2",
    link: "/#link2"
  },
  {
    label: "Breadcrumb 3",
    link: "/#link3",
    current: true
  }
]}/>)

export const Default = Template.bind({})