import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `
function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Hobbies: {props.hobbies.join(', ')}</p>
    </div>
  );
}

// Usage
<UserProfile name="John" age={30} hobbies={['Reading', 'Traveling', 'Gaming']} />

`;

const Props = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2>Props? </h2>
      <p>
        Props (short for `properties`) are a mechanism for passing data from a
        parent component to a child component in React. They are immutable and
        allow components to be dynamic and reusable.
      </p>
      <div>
        <h3>Key Features of Props</h3>
        <ul>
          <li>
            <span>Read-Only: </span> Props are immutable, meaning they cannot be
            modified by the child component.
          </li>
          <li>
            <span>Data Passing: </span> Used to pass data, including strings,
            numbers, arrays, objects, and even functions.
          </li>
          <li>
            <span>Reusable Components:</span> Enhance reusability by making
            components adaptable to different data.
          </li>
        </ul>
      </div>
      <div>
        <h2>Example: </h2>
        <div style={{ position: "relative", marginBottom: "1em" }}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {example}
          </SyntaxHighlighter>
          <button
            onClick={handleCopy}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "5px 10px",
              background: copied ? "green" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Props;
