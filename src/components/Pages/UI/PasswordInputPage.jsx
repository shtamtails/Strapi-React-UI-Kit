import { useRef, useState } from "react";
import { useUniqueId } from "../../Hooks";
import { PasswordInput, Select, Switch } from "../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";

export const PasswordInputPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const [height, setHeight] = useState(null);
  const heightOptions = [
    { id: useUniqueId, text: "Small", value: "sm" },
    { id: useUniqueId, text: "Medium", value: "md" },
    { id: useUniqueId, text: "Large", value: "lg" },
  ];

  const passwordInputRef = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Password Input"
        info="Get user password with hide/reveal content button"
        importCode={`import { PasswordInput } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <PasswordInput
              ref={passwordInputRef}
              label="Password"
              description="Don't show your password to unknown people!"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Password"
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
    import { PasswordInput } from './UI';

    const Demo = () => {
        const [password, setPassword] = useState(null);
        return (
            <PasswordInput
            value={password}
            setValue={setPassword}
            label="Password"
            description="Don't show your password to unknown people!"
            placeholder="Password"
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
    import { PasswordInput } from './UI';

    const Demo = () => {
    const passwordInputRef = useRef(null);
        return (
            <PasswordInput
              ref={passwordInputRef}
              label="Password"
              description="Don't show your password to unknown people!"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Password"
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

export default PasswordInputPage;
