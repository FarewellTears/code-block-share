import { Preview } from "./Preview";
import { Form } from "./Form";
import { useState, useRef } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const target = useRef(null);

  return (
    <div className='container'>
      <Form
        title={title}
        author={author}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setContent={setContent}
        target={target}
      />
      <Preview
        title={title}
        author={author}
        content={content}
        target={target}
      />
    </div>
  );
}

export default App;
