import React from 'react';
import { Alert } from "./Alert";
import { render, screen } from '@testing-library/react'

describe("Alert compoent", () => {
  it("is rendered without errors", () => {
    render(<Alert>Alert Message</Alert>)
    screen.getByText("Alert Message")
  })
})