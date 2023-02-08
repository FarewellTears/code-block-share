import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HighLighter = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{ fontSize: "10px", background: "inherit" }}
      codeTagProps={{
        style: {
          background: "inherit",
        },
      }}
      showLineNumbers
      wrapLongLines="pre-wrap"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default HighLighter;
