import ConditionalRendering from "./ConditionalRendering";
import EventExample from "./HandlingEvents";
import ListExample from "./Lists&Keys";
import InterviewQAModule2 from "./ModuleInterview";
import UseStateHook from "./useStateHook";

const Module2 = () => {
  return (
    <div>
      <h2>Module2: State & Events</h2>
      <ul>
        <li>- useState Hook - Forms (controlled vs uncontrolled)</li>
        <li>- Handling Events (onClick, onChange, etc.)</li>
        <li>- Conditional Rendering</li>
        <li>- Lists & Keys</li>
      </ul>
      <UseStateHook />
      <EventExample />
      <ConditionalRendering />
      <ListExample />
      <InterviewQAModule2 />
    </div>
  );
};

export default Module2;
