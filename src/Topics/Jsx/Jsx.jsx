import JsxReact from "../Module/ReactBasics/JsxReact";

const Jsx = () => {
  return (
    <div style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}>
      <h1>JSX?</h1>
      <p>
        JSX is a syntax extension for JavaScript that lets you write HTML-like
        markup inside a JavaScript file
      </p>
      <p>
        React components use a syntax extension called JSX to represent that
        markup. JSX looks a lot like HTML, but it is a bit stricter and can
        display dynamic information. The best way to understand this is to
        convert some HTML markup to JSX markup.
      </p>

      <div>
        <h2>Rules of JSX?</h2>
        <ul>
            <li>JSX must have a single parent element.</li>
            <li>Attributes are written in camelCase.</li>
            <li>Use curly braces for JavaScript expressions.</li>
        </ul>
      </div>

      <h2>Key Points: </h2>
      <ul>
        <li>
          React components group rendering logic together with markup because
          they are related.
        </li>
        <li>
          JSX is similar to HTML, with a few differences. You can use a
          converter if you need to.
        </li>
        <li>
          Error messages will often point you in the right direction to fixing
          your markup
        </li>
      </ul>
      <JsxReact />
    </div>
  );
};

export default Jsx;
