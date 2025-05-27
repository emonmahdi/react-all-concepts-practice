const PureComponents = () => {
  return (
    <div  style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}>
      <h2>Pure Components</h2>
      <p>
        Pure components are components that always render the same output for
        the same input (props and state). They rely only on their props and
        internal state and do not have side effects, making them predictable and
        easy to test.
      </p>

      <div>
        <p>
          A pure component adheres to the principles of functional programming,
          ensuring:
        </p>
        <ul>
          <li>
            Deterministic Behavior: Given the same props, a pure component
            always renders the same UI.
          </li>
          <li>
            Statelessness (Optional): Pure components often do not rely on
            external data or side effects.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PureComponents;
