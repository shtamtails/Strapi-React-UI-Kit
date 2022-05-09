import React, { useRef, useState } from "react";
import { useUniqueId } from "../../../../../Hooks";
import { TextInput, Select, Switch, Button } from "../../../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";

export const TextInputPage = () => {
  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const [height, setHeight] = useState(null);
  const heightOptions = [
    { id: useUniqueId, text: "Small", value: "sm" },
    { id: useUniqueId, text: "Medium", value: "md" },
    { id: useUniqueId, text: "Large", value: "lg" },
  ];

  const textInputRef = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Text Input"
        info="Simply get user input"
        importCode={`import { TextInput } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <TextInput
              ref={textInputRef}
              label="Username"
              description="Username or email"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Admin"
            />
          }
          settings={
            <>
              <div className="section">
                <Switch value={disabled} setValue={setDisabled} />
                <div className="text">Disabled</div>
              </div>
              <div className="section">
                <Switch value={loading} setValue={setLoading} />
                <div className="text">Loading</div>
              </div>
              <div className="section">
                <Switch value={required} setValue={setRequired} />
                <div className="text">Required</div>
              </div>
              <div className="section">
                <Select
                  label="Height"
                  optionsList={heightOptions}
                  value={height}
                  setValue={setHeight}
                  defaultValue={heightOptions[1]}
                />
              </div>
            </>
          }
        />
        <Subtitle>Using state</Subtitle>
        <Code>
          {`
    import { useState } from 'react'; 
    import { TextInput } from './UI';

    const Demo = () => {
        const [value, setValue] = useState(null);
        return (
            <PasswordInput
            value={value}
            setValue={setValue}
            label="Login"
            description="Username or password"
            placeholder="Login"
            disabled={${disabled}}
            loading={${loading}}
            height={${height}}
            required={${required}}
          />
        )
    }
`}
        </Code>
        <Subtitle>Using ref</Subtitle>
        <Code>
          {`
    import { useRef } from 'react'; 
    import { TextInput } from './UI';

    const Demo = () => {
    const textInputRef = useRef(null);
        return (
            <PasswordInput
              ref={textInputRef}
              label="Login"
              description="Username or email"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Login"
            />
          />
        )
    }
`}
        </Code>
      </Main>
    </div>
  );
};

export default TextInputPage;
