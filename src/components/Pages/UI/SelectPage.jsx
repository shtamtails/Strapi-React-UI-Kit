import { useRef, useState } from "react";
import { ComponentPreview, Subtitle, About, Main, Code } from "../Template";
import { Select, Switch } from "../../UI";
import { useUniqueId } from "../../Hooks";
import { GrCodeSandbox } from "react-icons/gr";

export const SelectPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [height, setHeight] = useState("md");
  const [sideIcon, setSideIcon] = useState(true);
  const [required, setRequired] = useState(false);

  const options = [
    { id: useUniqueId(), text: "React", value: "react" },
    { id: useUniqueId(), text: "Angular", value: "angular" },
    { id: useUniqueId(), text: "Vue", value: "vue" },
  ];
  const heightOptions = [
    { id: useUniqueId(), text: "sm", value: "sm" },
    { id: useUniqueId(), text: "md", value: "md" },
    { id: useUniqueId(), text: "lg", value: "lg" },
  ];
  const ref = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Select"
        info="Get user input from list of options"
        importCode={`import { Select } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          height={250}
          component={
            <div className="autocomplete-component-preview">
              <Select
                useref={ref}
                label="Chose your favourite javascript framework/library"
                optionsList={options}
                value={value}
                setValue={setValue}
                disabled={disabled}
                loading={loading}
                description="Listen to your heart..."
                sideIcon={sideIcon && <GrCodeSandbox />}
                height={height}
                defaultValue={options[0]}
                required={required}
              />
            </div>
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
                <Switch value={sideIcon} setValue={setSideIcon} />
                <div className="text">Icon</div>
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
        <Code>
          {`
 import { Select } from "./UI/";
 import { useState } from "react";
 import { useUniqueId } from "./Hooks/";

 const Demo = () => {
    const [value, setValue] = useState(null);
    const options = [{
        { id: useUniqueId(), text: "React", value: "react" },
        { id: useUniqueId(), text: "Angular", value: "angular" },
        { id: useUniqueId(), text: "Vue", value: "vue" },
    }]
    return (
        <Autocomplete
            label="Chose your favourite javascript framework/library"
            optionsList={options}
            value={value}
            setValue={setValue}
            description="Listen to your heart..."
            disabled={${disabled}}
            loading={${loading}}
            defaultValue={options[0]}
            required={${required}}
        />
    )
 }
`}
        </Code>
      </Main>
    </div>
  );
};

export default SelectPage;
