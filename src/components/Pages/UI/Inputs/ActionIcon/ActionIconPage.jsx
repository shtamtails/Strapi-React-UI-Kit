import React, { useState } from "react";
import { ActionIcon, Select, Switch } from "../../../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";
import { FiSettings } from "react-icons/fi";
import { useUniqueId } from "../../../../../Hooks";

export const ActionIconPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("md");
  const sizeOptions = [
    { id: useUniqueId(), text: "sm", value: "sm" },
    { id: useUniqueId(), text: "md", value: "md" },
    { id: useUniqueId(), text: "lg", value: "lg" },
    { id: useUniqueId(), text: "xl", value: "xl" },
  ];
  const [type, setType] = useState("light");
  const typeOptions = [
    { id: useUniqueId(), text: "Transparent", value: "transparent" },
    { id: useUniqueId(), text: "Hover", value: "hover" },
    { id: useUniqueId(), text: "Filled", value: "filled" },
    { id: useUniqueId(), text: "Light", value: "light" },
    { id: useUniqueId(), text: "Outline", value: "outline" },
  ];

  const [color, setColor] = useState("primary");
  const colorOptions = [
    { id: useUniqueId(), text: "Neutral", value: "neutral" },
    { id: useUniqueId(), text: "Success", value: "success" },
    { id: useUniqueId(), text: "Danger", value: "danger" },
    { id: useUniqueId(), text: "Primary", value: "primary" },
  ];

  return (
    <div className="documentation">
      <About
        name="Action Icon"
        info="Icon button to indicate secondary action"
        importCode={`import { ActionIcon } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <div className="action-icon-component-preview">
              <ActionIcon
                variant="filled"
                loading={loading}
                disabled={disabled}
                size={size}
                type={type}
                color={color}
              >
                <FiSettings />
              </ActionIcon>
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
                <Select label="Size" optionsList={sizeOptions} value={size} setValue={setSize} />
              </div>
              <div className="section">
                <Select label="Type" optionsList={typeOptions} value={type} setValue={setType} />
              </div>
              <div className="section">
                <Select
                  label="Color"
                  optionsList={colorOptions}
                  value={color}
                  setValue={setColor}
                />
              </div>
            </>
          }
        />
        <Code>
          {`
 import { ActionIcon } from "./UI/";
 import { FiSettings } from "react-icons/fi";
 
 const Demo = () => {
   return (
    <ActionIcon
      variant="filled"
      loading={${loading}}
      disabled={${disabled}}
      size={${size}}
      type={${type}}
      color={${color}}
    >
      <FiSettings />
    </ActionIcon>
   )
 }
`}
        </Code>
      </Main>
    </div>
  );
};

export default ActionIconPage;
