import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `
const categories = [
  { id: 1, name: 'Fruits', items: ['Apple', 'Banana'] },
  { id: 2, name: 'Vegetables', items: ['Carrot', 'Cabbage'] },
];
const nestedList = categories.map((category) => (
  <div key={category.id}>
    <h3>{category.name}</h3>
    <ul>
      {category.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
));
` 

const RenderingLists = () => {
    const [copied, setCopied] = useState(false);
    
      const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };
  return (
    <div style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}>
        <h2>Rendering Lists</h2>
        <p>Rendering a list in React refers to dynamically generating and displaying multiple elements (like ``li`, `div`, etc.) from an array of data. It allows React applications to handle and render data efficiently, especially when dealing with dynamic or repetitive content.</p>

        <h4>Example: </h4>
        <div style={{ position: "relative", marginBottom: "1em" }}>
                  <SyntaxHighlighter language="jsx" style={dracula}>
                    {code}
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
  )
}

export default RenderingLists