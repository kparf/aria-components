import React, { ReactElement, useState, ChangeEvent } from "react"
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

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlertText(e.target.value)
  }
  
  return (
    <div>
      <input onChange={inputChange}/>
      <AlertComponent>
        {alertText}
      </AlertComponent>
    </div>
  )
}

const Template: Story = (args) => (<AlertContainer AlertComponent={Alert}/>)

export const Default = Template.bind({})