const Introduction = () => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2>React Introduction</h2>
      <p>
        ReactJS is a component-based JavaScript library used to build dynamic
        and interactive user interfaces. It simplifies the creation of
        single-page applications (SPAs) with a focus on performance and
        maintainability.
      </p>
      <ul>
        <li>It is developed and maintained by Facebook.</li>
        <li>The latest version of React is React 19</li>
        <li>Uses a virtual DOM for faster updates.</li>
        <li>Supports a declarative approach to designing UI components</li>
        <li>Ensures better application control with one-way data binding.</li>
      </ul>

      <h3>How does React work? </h3>
      <p>
        React operates by creating an in-memory virtual DOM rather than directly
        manipulating the browser’s DOM. It performs necessary manipulations
        within this virtual representation before applying changes to the actual
        browser DOM.
      </p>

      <h3>how the process works:</h3>
      <ul>
        <li>1. Actual DOM and Virtual DOM</li>
        <li>
          2. Detecting Changes - (React compares the previous Virtual DOM with
          the New Virtual DOM using a process called <mark>reconciliation</mark>{" "}
          .)
        </li>
        <li>3. Efficient DOM Update</li>
      </ul>

      <h3>Key Features of React</h3>
      <ol>
        <li>Virtual DOM</li>
        <li>Component-Based Architecture</li>
        <li>JSX (JavaScript XML)</li>
        <li>One-Way Data Binding</li>
        <li>State Management</li>
        <li>React Hooks</li>
        <li>React Router</li>
      </ol>

      <div>
        <h3>ReactJS Lifecycle</h3>
        <p>
          Every React Component has a lifecycle of its own, the lifecycle of a
          component can be defined as the series of methods that are invoked in
          different stages of the component’s existence. React automatically
          calls these methods at different points in a component’s life cycle.
          Understanding these phases helps manage the state, perform side
          effects, and optimize components effectively.
        </p>
        <ul>
          <li>
            Initialization - This is the stage where the component is
            constructed with the given Props and default state. This is done in
            the constructor of a Component Class.
          </li>
          <li>Mounting Phase</li>
          <p>
            <b>Constructor:</b> The constructor method initializes the
            component. It’s where you set up the initial state and bind event
            handlers. <br />
            <b>render(): </b> This method returns the JSX representation of the
            component. It’s called during initial rendering and subsequent
            updates. <br /> <b>componentDidMount():</b> After the component is
            inserted into the DOM, this method is invoked. Use it for side
            effects like data fetching or setting timers.
            
          </p>

          <li>Updating Phase</li>
          <ul>
            <li>
              componentDidUpdate(prevProps, prevState): Called after the
              component updates due to new props or state changes. Handle side
              effects here.
            </li>
            <li>
              shouldComponentUpdate(nextProps, nextState): Determines if the
              component should re-render. Optimize performance by customizing
              this method.
            </li>
            <li>
              render(): Again, the render() method reflects changes in state or
              props during updates.
            </li>
          </ul>
          <li>Unmounting Phase</li>
          <ul>
            <li>componentWillUnmount(): Invoked just before the component is removed from the DOM. Clean up resources (e.g., event listeners, timers).</li>
          </ul>
        </ul>
      </div>
      <div>
        <h3>Limitations of React</h3>
        <ul>
            <li>SEO Challenges</li>
            <li>Steep Learning Curve</li>
            <li>Boilerplate Code</li>
        </ul>
      </div>
      <div>
        <h3>New Features Added in React 19</h3>
        <ul>
            <li><b>Server-Side Rendering Improvements:</b> React 19 improves server-side rendering (SSR) performance, allowing web apps to render faster and be more SEO-friendly.</li>
            <li><b>React Suspense Advancements:</b> Suspense has been further enhanced, making it easier to manage asynchronous data loading and enabling better UX for handling component rendering while waiting for data.</li>
            <li><b>Concurrent Mode:</b> Enhancements to Concurrent Mode allow React apps to remain responsive and smooth, especially during complex updates or when handling large amounts of data.</li>
            <li><b>Automatic Batching Enhancements:</b> Automatic Batching improvements provide better performance for asynchronous updates, ensuring that multiple state updates are batched together for improved efficiency.</li>
            <li><b>Better Integration with Modern Web Standards:</b> React 19 improves integration with the latest web standards like Web Vitals, Intersection Observer, and CSS Grid, enhancing responsiveness and overall performance.</li>
            <li><b>New Hooks API:</b> New hooks were introduced to improve state management and lifecycle control, making functional components even more powerful.</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
