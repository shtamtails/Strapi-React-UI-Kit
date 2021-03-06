import { useState } from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";
import { Checkbox, Switch } from "../../UI";

export const CheckboxPage = () => {
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {};
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
              <div style={{ height: "100%", display: "flex" }}>
                <Checkbox
                  value={value}
                  setValue={setValue}
                  label="Yes, I don't read license agreement."
                  disabled={disabled}
                  onClick={handleClick}
                />
              </div>
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
     const handleClick = () => {
         console.log(ref.current.checked);
     }
     return (
        <Checkbox
            useref={ref}
            label="Yes, I don't read license agreement."
            disabled={${disabled}}
            onClick={handleClick}
        />
     )
 }
`}
        </Code>
        <Subtitle>Using component with state</Subtitle>
        <Code>
          {`
 import { useState } from "react";
 import { Checkbox } from "./UI/";

 const Demo = () => {
     const [checked, setChecked] = useState(false);
     const handleClick = () => {
         console.log(checked);
     }
     return (
        <Checkbox
            value={checked}
            setValue={setChecked}
            label="Yes, I don't read license agreement."
            disabled={${disabled}}
            onClick={handleClick}
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
