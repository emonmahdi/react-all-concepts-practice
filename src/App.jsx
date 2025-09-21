 
import ReactFundamentals from "./modules_plan/module_1/ReactFunamentals";
import Module10 from "./modules_plan/module_10/Module10";
import Module11 from "./modules_plan/module_11/Module11";
import Module12 from "./modules_plan/module_12/Module12";
import Module12_1 from "./modules_plan/module_12/Module12_1";
import Module13 from "./modules_plan/module_13/Module13";
import Module14 from "./modules_plan/module_14/Module14";
import Module15 from "./modules_plan/module_15/Module15";
import Module16 from "./modules_plan/module_16/Module16";
import Module2 from "./modules_plan/module_2/Module2";
import Module3 from "./modules_plan/module_3/Module3";
import Module4 from "./modules_plan/module_3/module_4/Module4";
import Module5 from "./modules_plan/module_5/Module5";
import Module6 from "./modules_plan/module_6/Module6";
import Module7 from "./modules_plan/module_7/Module7";
import Module8 from "./modules_plan/module_8/Module8";
import Module9 from "./modules_plan/module_9/Module9";
import Components from "./Topics/components/Components";
import ConditionalRendering from "./Topics/ConditionalRendering/ConditionalRendering";
// import ThemeConsumer from "./Topics/ContextApi/ThemeConsumer"
// import RenderingEvent from "./Topics/Example/RenderingEvent"
import Jsx from "./Topics/Jsx/Jsx";
import AllReactConcepts from "./Topics/Module/AllReactConcepts";
import ExportImport from "./Topics/Module/ReactBasics/ExportImport";
import Introduction from "./Topics/Module/ReactBasics/Introduction";
import VirtualDom from "./Topics/Module/ReactBasics/VirtualDom";
import Props from "./Topics/Props/Props";
import PureComponents from "./Topics/PureComponents/PureComponents";
// import ParentComponent from "./Topics/ReactMemo/ParentComponent"
import RenderAndCommit from "./Topics/RenderAndCommit/RenderAndCommit";
import RenderingLists from "./Topics/RenderingLists/RenderingLists";

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
      {/* Module wise plan */}
      <ReactFundamentals />
      <Module2 />
      <Module3 />
      <Module4 />
      <Module5 />
      <Module6 />
      <Module7 />
      <Module8 />
      <Module9 />
      <Module10 />
      <Module11 />
      <Module12_1 />
      <Module12 />
      <Module13 />
      <Module14 />
      <Module15 />
      <Module16 />
    </>
  );
}

export default App
