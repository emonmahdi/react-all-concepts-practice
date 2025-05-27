 

const VirtualDom = () => {
  return (
    <div style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}> 
      <h2>Virtual Dom</h2>
      <p>The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real DOM (Document Object Model). It helps React manage UI updates more efficiently by keeping a virtual version of the UI in memory. When changes occur, React updates only the necessary parts of the real DOM, instead of re-rendering everything.</p>
      
      <h2>How Does the Virtual DOM Work?</h2>
      <ul>
        <li>Rendering the Virtual DOM: React creates a virtual representation of the UI as a tree of JavaScript objects.</li>
        <li>Updating State: It generates a new Virtual DOM tree to reflect the updated state when the application state changes.</li>
        <li>Diffing Algorithm: React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required.</li>
        <li>Updating the Real DOM: React applies only the necessary changes to the real DOM, optimizing rendering performance.</li>
        <div>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241212235246933476/Browser-DOM-Virtual-DOM.webp" width={300} alt="" />
        </div>

        <p> Reference: <a href="https://www.geeksforgeeks.org/reactjs-virtual-dom/">Virtual Dom</a></p>
      </ul>
      </div>
  )
}

export default VirtualDom