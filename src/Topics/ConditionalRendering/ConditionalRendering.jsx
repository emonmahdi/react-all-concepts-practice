import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = `
 function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

// Usage
<Greeting isLoggedIn={true} />

 `;

const codeExample2 = `
// Using Ternary Operator

function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
}

`

const ConditionalRendering = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
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
      <h2>Conditional Rendering</h2>
      <p>
        Definition: Conditional rendering is a feature in React that allows
        components to render different UI elements based on specific conditions
        or states.
      </p>
      <p>
        Purpose: It dynamically updates the UI to reflect changes in data,
        state, or user interactions.
      </p>

      <div>
        <h4>Types of Conditional rendering</h4>
        <ul>
          <li>1. Using If/Else Statements</li>
          <li>2. Using Ternary Operator</li>
          <li>3. Using Logical AND (&&) Operator</li>
          <li>4. Using Switch Case Statements</li>
          <li>5. Conditional Rendering in Lists (Using .map())</li>
          <li>6. Conditional Rendering with Component State</li>
        </ul>
      </div>

      <div>
        <h2>Example: </h2>
        <div style={{ position: "relative", marginBottom: "1em" }}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {codeExample}
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
        <div style={{ position: "relative", marginBottom: "1em" }}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {codeExample2}
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

export default ConditionalRendering;
