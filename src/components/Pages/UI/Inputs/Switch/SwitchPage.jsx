import React, { useRef, useState } from "react";
import { Switch, Button } from "../../../../UI";
import { ComponentPreview, Subtitle, About, Main, Code } from "../../../Template";
export const SwitchPage = () => {
  const [value, setValue] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const switchRef = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Switch"
        info="Get true/false user input"
        importCode={`import { Switch } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <div style={{ height: "100%", display: "flex" }}>
              <Switch useref={switchRef} label="I agree to sell my privacy" disabled={disabled} />
            </div>
          }
          settings={
            <div className="section">
              <Switch value={disabled} setValue={setDisabled} label="Disabled" />
            </div>
          }
        />
        <Subtitle>Using State</Subtitle>
        <Code>
          {`
  import { useState } from 'react';
  import { Switch } from './UI';

  const Demo = () => {
    const [value, setValue] = useState(false);
    return (
      <Switch
        value={value}
        setValue={setValue}
        label="I agree to sell my privacy"
        disabled={${disabled}}
      />
    )
  }
`}
        </Code>
        <Subtitle>Using Ref</Subtitle>
        <Code>
          {`
  import { useRef } from 'react';
  import { Switch } from './UI';

  const Demo = () => {
    const switchRef = useRef(null);
    return (
      <Switch
        useref={switchRef}
        label="I agree to sell my privacy"
        disabled={disabled}
      />
    )
  }
`}
        </Code>
      </Main>
    </div>
  );
};

export default SwitchPage;
