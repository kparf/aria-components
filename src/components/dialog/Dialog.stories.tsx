import React, { useState, useCallback, FormEvent, useRef } from "react"
import styled from "@emotion/styled"
import { Dialog } from "./Dialog"
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta

const Template: Story = (args) => (<Dialog>Dialog!</Dialog>)

export const Default = Template.bind({})