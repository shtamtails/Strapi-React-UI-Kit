import { useRef, useState } from "react";
import { TextArea, Switch, TextInput } from "../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";
export const TextAreaPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const [height, setHeight] = useState(null);
  const [maxWidth, setMaxWidth] = useState(500);
  const [maxHeight, setMaxHeight] = useState(200);

  const passwordInputRef = useRef(null);
  return (
    <div className="documentation">
      <About
        name="Text Aea"
        info="Get user input with resizeable input container"
        importCode={`import { TextArea } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <TextArea
              ref={passwordInputRef}
              label="Give us a review"
              description="We read all reviews and take notes!"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Type here..."
              maxWidth={`${maxWidth}px`}
              maxHeight={`${maxHeight}px`}
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
                <TextInput value={maxWidth} setValue={setMaxWidth} label="Max Width" />
              </div>
              <div className="section">
                <TextInput value={maxHeight} setValue={setMaxHeight} label="Max Height" />
              </div>
            </>
          }
        />
        <Subtitle>Using state</Subtitle>
        <Code>
          {`
    import { useState } from 'react'; 
    import { TextArea } from './UI';

    const Demo = () => {
        const [value, setValue] = useState(null);
        return (
            <TextArea
            value={value}
            setValue={setValue}
            label="Give us a review"
            description="We read all reviews and take notes!"
            disabled={disabled}
            loading={loading}
            height={height}
            required={required}
            placeholder="Type here..."
            maxWidth="500px"
            maxHeight="200px"
          />
        )
    }
`}
        </Code>
        <Subtitle>Using ref</Subtitle>
        <Code>
          {`
    import { useRef } from 'react'; 
    import { TextArea } from './UI';

    const Demo = () => {
    const textAreaRef = useRef(null);
        return (
            <PasswordInput
              ref={textAreaRef}
              label="Give us a review"
              description="We read all reviews and take notes!"
              disabled={disabled}
              loading={loading}
              height={height}
              required={required}
              placeholder="Type here..."
              maxWidth="500px"
              maxHeight="200px"
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

export default TextAreaPage;
