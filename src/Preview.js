import React from "react";

export const Preview = (props) => {
  const { title, author, content, target } = props;

  const copyContent = () => {
    const theClipboard = navigator.clipboard;
    theClipboard
      .writeText(`${content}\n———— ${author} ${title}`)
      .then(() => console.log("Copy content successfully!"))
      .catch((error) => console.error("Oops...Copy content failed!", error));;
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
              <pre>{content}</pre>
              {author.length | title.length ? (
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
