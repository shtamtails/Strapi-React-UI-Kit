import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export const Code = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language="jsx" theme={github}>
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
  );
};

export default Code;
