import React from "react";

export const Preview = (props) => {
  const { title, author, content, target } = props;

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
            <div className='content'>
              <pre>{content}</pre>
              {(author.length > 0) | (title.length > 0) ? (
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
