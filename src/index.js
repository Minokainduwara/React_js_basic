import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

const react = require("react");
const reactDom = require("react-dom");

reactDom.render(
  <div>
    <Heading />
    <Paragraph />
  </div>,
  document.getElementById("root")
);
