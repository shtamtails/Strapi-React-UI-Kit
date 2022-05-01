import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export const About = ({ name, info, importCode, sourceLink, packageLink }) => {
  return (
    <div className="about">
      <div className="container">
        <div className="name">
          <h1> {name} </h1>
        </div>
        <div className="info">{info}</div>
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
  );
};

export default About;
