const RenderAndCommit = () => {
  return (
    <div style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}>
      Render And Commit
      <h3>1. Render Phase: </h3>
      <p>
        The Render phase in React involves computing what the UI should look
        like based on the current state and props. It is a pure calculation
        phase where React decides which components need to be updated or
        re-rendered.
      </p>
      <div>
        <p>This process of requesting and serving UI has three steps:</p>
        <ul>
          <li>
            Triggering a render (delivering the guest’s order to the kitchen)
          </li>
          <li>Rendering the component (preparing the order in the kitchen)</li>
          <li>Committing to the DOM (placing the order on the table)</li>
        </ul>
      </div>
    </div>
  );
};

export default RenderAndCommit;
