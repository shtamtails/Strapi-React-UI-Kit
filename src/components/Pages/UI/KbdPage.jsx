import React from "react";
import { About, Code, ComponentPreview, Subtitle, Main } from "../Template/";
import { Kbd } from "../../UI";

export const KbdPage = () => {
  return (
    <div className="documentation">
      <About
        name="Kbd"
        info="Display keyboard button or keys combination
        "
        importCode={`import { Kbd } from './UI/';`}
        sourceLink=""
        packageLink=""
      />
      <Main>
        <Subtitle>Usage</Subtitle>
        <ComponentPreview
          component={
            <>
              <Kbd>Command</Kbd> + <Kbd>C</Kbd> to copy element and <Kbd>Command</Kbd> +{" "}
              <Kbd>V</Kbd> to paste it.
            </>
          }
        />
        <Code>
          {` import { Kbd } from './UI/';

 const Demo = () => {
   return (
     <>
     <Kbd>Command</Kbd> + <Kbd>C</Kbd> to copy element and <Kbd>Command</Kbd> + <Kbd>V</Kbd> to paste it.
     </>
   )
 }
`}
        </Code>
      </Main>
    </div>
  );
};

export default KbdPage;
