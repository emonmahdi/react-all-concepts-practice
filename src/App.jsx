 
import Components from "./Topics/components/Components"
import ConditionalRendering from "./Topics/ConditionalRendering/ConditionalRendering"
// import ThemeConsumer from "./Topics/ContextApi/ThemeConsumer"
// import RenderingEvent from "./Topics/Example/RenderingEvent"
import Jsx from "./Topics/Jsx/Jsx"
import AllReactConcepts from "./Topics/Module/AllReactConcepts"
import ExportImport from "./Topics/Module/ReactBasics/ExportImport"
import Introduction from "./Topics/Module/ReactBasics/Introduction"
import VirtualDom from "./Topics/Module/ReactBasics/VirtualDom";
import Props from "./Topics/Props/Props"
import PureComponents from "./Topics/PureComponents/PureComponents"
// import ParentComponent from "./Topics/ReactMemo/ParentComponent"
import RenderAndCommit from "./Topics/RenderAndCommit/RenderAndCommit"
import RenderingLists from "./Topics/RenderingLists/RenderingLists" 
 

function App() { 

  return (
    <>
      <h2>React js Practice</h2>
      <br />
      <AllReactConcepts />
      <br />
      <Introduction />
      <ExportImport />
      <Jsx />
      {/* <ParentComponent /> */}
      <br />
      {/* <ThemeConsumer /> */}
      {/* <RenderingEvent /> */}
      <Components />
      <ConditionalRendering />
      <VirtualDom />
      <Props />
      <RenderingLists />
      <PureComponents />
      <RenderAndCommit />
    </>
  );
}

export default App
