import React, { useState, useCallback, FormEvent, useRef } from "react"
import styled from "@emotion/styled"
import { Alert } from "./Alert"
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: "Components/Alert",
  component: Alert,
} as Meta

type Props = {
  AlertComponent: React.FC
}
const AlertContainer: React.FC<Props> = ({ AlertComponent }) => {
  const [alertText, setAlertText] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  const sumbitHandler = useCallback((e: FormEvent) => {
    e.preventDefault()
    const value = inputRef.current?.value
    if (value) {
      setAlertText(value)
    }
  }, [])
  
  return (
    <div>
      <Form onSubmit={sumbitHandler}>
        <input ref={inputRef}/>
        <button>Alert!</button>
      </Form>
      <AlertComponent>
        {alertText}
      </AlertComponent>
    </div>
  )
}

const Form = styled.form`
  display: flex;
  margin-bottom: 1em;
  & input {
    margin-right: 1em;
  }
`

const Template: Story = (args) => (<AlertContainer AlertComponent={Alert}/>)

export const Default = Template.bind({})