import React, { useState } from "react";
import { Switch } from "../../../../UI";
import { ComponentPreview, Subtitle, About, Main, Code } from "../../../Template";
export const SwitchPage = () => {
  const [value, setValue] = useState(true);
  const [disabled, setDisabled] = useState(false);
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
              <Switch
                value={value}
                setValue={setValue}
                label="I agree to sell my privacy"
                disabled={disabled}
              />
            </div>
          }
          settings={
            <div className="section">
              <Switch value={disabled} setValue={setDisabled} label="Disabled" />
            </div>
          }
        />
      </Main>
    </div>
  );
};

export default SwitchPage;
