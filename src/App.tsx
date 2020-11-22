import React from "react";
import styled from "@emotion/styled"


import { Accordion, Section as AccordionSection } from "./components/accordion"

function App() {
  return (
    <AppCotent>
      <Accordion>
        <AccordionSection
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
        </AccordionSection>
        <AccordionSection
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
        </AccordionSection>
      </Accordion>
    </AppCotent>
  );
}

const AppCotent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

export default App;
