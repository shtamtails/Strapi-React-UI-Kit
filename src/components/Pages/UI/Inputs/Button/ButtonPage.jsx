import React, { useState } from "react";
import { Button } from "../../../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";

export const ButtonPage = () => {
  return (
    <div className="documentation">
      <About
        name="Button"
        info="Just a button"
        importCode={`import { Button } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <div className="button-component-preview">
              <h3>Filled</h3>
              <div className="preview-row">
                <div className="button-component-preview-button">
                  <Button onClick={(e) => {}} color="success" variant="filled">
                    Success
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="danger" variant="filled">
                    Danger
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="info" variant="filled">
                    Info
                  </Button>
                </div>
              </div>
              <h3>Outline</h3>
              <div className="preview-row">
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="success" variant="outline">
                    Success
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="danger" variant="outline">
                    Danger
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="info" variant="outline">
                    Info
                  </Button>
                </div>
              </div>
              <h3>Light</h3>
              <div className="preview-row">
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="success" variant="light">
                    Success
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="danger" variant="light">
                    Danger
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="info" variant="light">
                    Info
                  </Button>
                </div>
              </div>
              <h3>Subtle</h3>
              <div className="preview-row">
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="success" variant="subtle">
                    Success
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="danger" variant="subtle">
                    Danger
                  </Button>
                </div>
                <div className="button-component-preview-button">
                  <Button onClick={() => {}} color="info" variant="subtle">
                    Info
                  </Button>
                </div>
              </div>
            </div>
          }
        />
        <Code>
          {`
    import { Button } from "./UI";

    const Demo = () => {
     const handleClick = (e) => {
      // Your code here
     }

     return (
      <Button color="success" variant="light" onClick=(handleClick) />
     )
    }
`}
        </Code>
      </Main>
    </div>
  );
};

export default ButtonPage;
