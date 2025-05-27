import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `
    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }
    
    // Usage
    <Greeting name="Alice" />
      `;

const classCompo = `
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

// Usage
<Welcome name="Bob" />

      `;
const Components = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
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
      <h2>Components: </h2>
      <p>
        A React component is a JavaScript function that you can sprinkle with
        markup
      </p>

      <h2>Some key points</h2>
      <ul>
        <li>
          React lets you create components, reusable UI elements for your app.
        </li>
        <li>In a React app, every piece of UI is a component.</li>
      </ul>
      <h2>React components are regular JavaScript functions except:</h2>
      <ul>
        <li>Their names always begin with a capital letter.</li>
        <li>They return JSX markup.</li>
      </ul>
      {/* Types 1 */}
      <div>
        <h2>Types of React Components</h2>
        <h3>1. Functional Components</h3>
        <p>
          Functional components are simple JavaScript functions that accept
          props and return React elements.
        </p>
        <h4>Example: </h4>

        <div style={{ position: "relative", marginBottom: "1em" }}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {codeSnippet}
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
      {/* types 2 */}
      <div>
        <h2>2. Class Components</h2>
        <p>
          Class components are ES6 classes that extend React.Component and must
          include a render() method.
        </p>
        <h4>Example: </h4>
        <div style={{ position: "relative", marginBottom: "1em" }}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {classCompo}
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

export default Components;
