import React from "react";
import domtoimage from "dom-to-image-more";

export const Form = (props) => {
  const { title, author, setTitle, setAuthor, setContent, target } = props;

  const DataOut = (event) => {
    event.preventDefault();

    const node = target.current;

    const options = {
      scale: 2,
      width: node?.clientWidth || 0,
      height: node?.clientHeight || 0,
    };
    domtoimage
      .toPng(node, { ...options })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${title}-${author}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => console.error("Oops...Something went wrong!", error));
  };

  const DataReset = () => {
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <section className='flex-container'>
      <h1>每日摘录</h1>
      <div className='wrapper'>
        <div className='card'>
          <form
            className='form'
            name='form'
            onSubmit={DataOut}
            onReset={DataReset}
          >
            <div className='form-group'>
              <label htmlFor='title'>标题</label>
              <input
                className='form-input'
                type='text'
                name='title'
                placeholder='请输入标题'
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='author'>作者</label>
              <input
                className='form-input'
                type='text'
                name='author'
                placeholder='请输入作者'
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='content'>内容</label>
              <textarea
                className='form-input'
                type='textarea'
                name='content'
                placeholder='请输入文章内容'
                rows={30}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div className='form-group'>
              <label />
              <div className='btn-group'>
                <button type='reset'>重置</button>
                <button type='submit'>导出</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
