import React, { useState } from "react";
import { Accordion, Kbd, Switch } from "../../../../UI";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export const AccordionPage = () => {
  const [multiple, setMultiple] = useState(true);
  const importCode = `import { Accordion } from './UI/';`;
  const exampleCode = `
  import { Accordion } from './UI/';
  
  function Demo() {
    return (
      <Accordion multiple={${multiple}}>
        <Accordion.Item title="Customization">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum fugit,
          explicabo illum sequi aut?
        </Accordion.Item>
    
        <Accordion.Item title="Flexibility">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nesciunt totam
          veritatis fugit, corrupti eligendi quas deserunt aperiam omnis maxime excepturi,
          tempore consequuntur veniam placeat?
        </Accordion.Item>

        <Accordion.Item title="Something else">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates,
          dolorum consequuntur fugit at perspiciatis nam in fuga. Placeat quisquam molestias
          maxime, ipsa adipisci eum sit, iure est nesciunt quasi nihil odit quis consectetur
          suscipit! Delectus culpa ut est laboriosam deserunt et quam facilis debitis esse
          aperiam, exercitationem ducimus? Obcaecati.
        </Accordion.Item>
      </Accordion>
    )
  }
`;
  return (
    <div className="documentation">
      <div className="about">
        <div className="container">
          <div className="name">
            <h1> Accordion </h1>
          </div>
          <div className="info">Divide content into collapsible sections</div>
          <div className="source-container">
            <div className="source">
              <div className="text">Import</div>
              <div className="path">
                <Highlight {...defaultProps} code={importCode} language="jsx" theme={github}>
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>
            <div className="source">
              <div className="text">Source</div>
              <div className="path">View Source code</div>
            </div>
            <div className="source">
              <div className="text">Package</div>
              <div className="path">@UI/core</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main">
          <div className="subtitle">
            <h2>Usage</h2>
          </div>
          <div className="component-preview">
            <div className="component">
              <Accordion multiple={multiple}>
                <Accordion.Item title="Customization">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsum fugit,
                  explicabo illum sequi aut?
                </Accordion.Item>
                <Accordion.Item title="Flexibility">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nesciunt totam
                  veritatis fugit, corrupti eligendi quas deserunt aperiam omnis maxime excepturi,
                  tempore consequuntur veniam placeat?
                </Accordion.Item>
                <Accordion.Item title="Something else">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptates,
                  dolorum consequuntur fugit at perspiciatis nam in fuga. Placeat quisquam molestias
                  maxime, ipsa adipisci eum sit, iure est nesciunt quasi nihil odit quis consectetur
                  suscipit! Delectus culpa ut est laboriosam deserunt et quam facilis debitis esse
                  aperiam, exercitationem ducimus? Obcaecati.
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="settings">
              <div className="section">
                <Switch value={multiple} setValue={setMultiple} />
                <div className="text">Multiple</div>
              </div>
            </div>
          </div>
          <Highlight {...defaultProps} code={exampleCode} language="jsx" theme={github}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
