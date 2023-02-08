import { Preview } from "./Preview";
import { Form } from "./Form";
import { useState, useRef } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("text");
  const target = useRef(null);

  return (
    <div className='container'>
      <Form
        title={title}
        author={author}
        type={type}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setContent={setContent}
        setType={setType}
        target={target}
      />
      <Preview
        title={title}
        author={author}
        content={content}
        type={type}
        target={target}
      />
    </div>
  );
}

export default App;
