import React, { useEffect, useState } from "react";
import { Affix } from "../../../../UI";
import { About, Code, ComponentPreview, Subtitle, Main } from "../../../Template/";

export const AffixPage = () => {
  return (
    <>
      <Affix parentPath="content" />
      <div className="documentation">
        <About
          name="Affix"
          info="Scroll to top button"
          importCode={`import { Affix } from './UI/';`}
          sourceLink=""
          packageLink=""
        />
        <Main>
          <Subtitle>Usage</Subtitle>
          <Code>
            {`
    import { Affix } from "./UI/";

    const Demo = () => {
        return (
            <>
            <Affix parentPath="ClassName of your content div where affix is needed" />
            // Content
            </>
        )
    }
`}
          </Code>
        </Main>
      </div>
    </>
  );
};
