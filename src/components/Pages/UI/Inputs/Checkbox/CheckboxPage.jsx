import React, { useRef, useState } from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";
import { Checkbox, Switch } from "../../../../UI";

export const CheckboxPage = () => {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref.current.checked);
  };
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="documentation">
      <About
        name="Checkbox"
        info="Get true or false user input"
        importCode={`import { Checkbox } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <>
              <Checkbox
                useref={ref}
                setValue={setValue}
                label="Yes, I don't read license agreement."
                disabled={disabled}
                // onClick={handleClick}
              />
            </>
          }
          settings={
            <div className="section">
              <Switch value={disabled} setValue={setDisabled} />
              <div className="text">Disabled</div>
            </div>
          }
        />
        <Subtitle>Using component with ref</Subtitle>
        <Code>
          {`
 import { useRef } from "react";
 import { Checkbox } from "./UI/";

 const Demo = () => {
     const ref = useRef(null)
     return (
        <Checkbox
            useref={ref}
            setValue={setValue}
            label="Yes, I don't read license agreement."
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

export default CheckboxPage;
