import { useRef, useState } from "react";
import { useUniqueId } from "../../Hooks";
import { Autocomplete, Switch, Select } from "../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";
import { GrCodeSandbox } from "react-icons/gr";

export const AutocompletePage = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sideIcon, setSideIcon] = useState(true);
  const [height, setHeight] = useState(null);
  const [required, setRequired] = useState(false);
  const [borderRadius, setBorderRadius] = useState(null);
  const options = [
    {
      id: useUniqueId(),
      text: "React",
      value: "react",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
    },
    {
      id: useUniqueId(),
      text: "Angular",
      value: "angular",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
    },
    {
      id: useUniqueId(),
      text: "Vue",
      value: "vue",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
    },
  ];
  const heightOptions = [
    { id: useUniqueId(), text: "sm", value: "sm" },
    { id: useUniqueId(), text: "md", value: "md" },
    { id: useUniqueId(), text: "lg", value: "lg" },
  ];
  const borderRadiusOptions = [
    { id: useUniqueId(), text: "sm", value: "sm" },
    { id: useUniqueId(), text: "md", value: "md" },
    { id: useUniqueId(), text: "lg", value: "lg" },
    { id: useUniqueId(), text: "xl", value: "xl" },
    { id: useUniqueId(), text: "xxl", value: "xxl" },
  ];

  const ref = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Autocomplete"
        info="Autocomplete user input with any list of options"
        importCode={`import { Autocomplete } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          height={250}
          component={
            <div className="autocomplete-component-preview">
              <Autocomplete
                label="Chose your favourite framework"
                optionsList={options}
                value={value}
                setValue={setValue}
                description="Try to search for some option"
                disabled={disabled}
                loading={loading}
                sideIcon={sideIcon && <GrCodeSandbox />}
                height={height}
                required={required}
                borderRadius={borderRadius}
                useref={ref}
                defaultValue={options[0]}
                placeholder={"..."}
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
              <div className="section">
                <Select
                  label="Border Radius"
                  optionsList={borderRadiusOptions}
                  value={borderRadius}
                  setValue={setBorderRadius}
                  defaultValue={borderRadiusOptions[1]}
                />
              </div>
            </>
          }
        />
        <Code>
          {`
 import { Autocomplete } from "./UI/";
 import { useState } from "react";
 import { useUniqueId } from "./Hooks/";

 const Demo = () => {
    const [value, setValue] = useState(null);
    const options = [
      {
        id: useUniqueId(),
        text: "React",
        value: "react",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
      },
      {
        id: useUniqueId(),
        text: "Angular",
        value: "angular",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
      },
      {
        id: useUniqueId(),
        text: "Vue",
        value: "vue",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem.",
      },
    ];
    return (
        <Autocomplete
            label="Chose your favourite framework"
            optionsList={options}
            value={value}
            setValue={setValue}
            description="Try to search for some option"
            disabled={${disabled}}
            loading={${loading}}
            defaultValue={options[0]}
            required={${required}}
            borderRadius="${borderRadius}"
            placeholder={"..."}
            ${sideIcon ? `sideIcon={<GrCodeSandbox />}` : ``}
            ${height ? `height="${height}"` : ``}
        />
    )
 }
`}
        </Code>
      </Main>
    </div>
  );
};

export default AutocompletePage;
