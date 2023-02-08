import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const HighLighter = ({ language, children }) => {
//   return (
//     <SyntaxHighlighter language={language} style={oneDark} wrapLines={true}>
//       {children}
//     </SyntaxHighlighter>
//   );
// };
import HighLighter from "./HighLighter";

export const Preview = (props) => {
  const { title, author, content, type, target } = props;

  const copyContent = () => {
    const theClipboard = navigator.clipboard;
    const contentText = type === "text" && (author.length | title.length) ? `${content}\n———— ${author} ${title}` : `${content}`

    theClipboard
      .writeText(contentText)
      .then(() => console.log("Copy content successfully!"))
      .catch((error) => console.error("Oops...Copy content failed!", error));
  };

  return (
    <section className='flex-container preview'>
      <div className='wrapper'>
        <div className='target-dom' ref={target}>
          <div className='card'>
            <div className='mac-head'>
              <div className='circle circle-a'></div>
              <div className='circle circle-b'></div>
              <div className='circle circle-c'></div>
            </div>
            {content.length | (author.length && title.length) ? (
              <div className='copy' onClick={copyContent}>
                <svg
                  className='icon'
                  aria-hidden='true'
                  style={{ width: 20, height: 20 }}
                >
                  <use xlinkHref='#icon-file-copy-fill'></use>
                </svg>
              </div>
            ) : null}
            <div className='content'>
              {type === "text" ? (
                <pre>{content}</pre>
              ) : (
                <HighLighter language='cpp'>{content}</HighLighter>
              )}
              {type === "text" && (author.length | title.length) ? (
                <p>
                  ———— {author} {title}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
