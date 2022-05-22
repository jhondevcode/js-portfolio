import Template from "./templates/Template.js";
import "./styles/main.css";
import "./styles/vars.styl";

(async function App() {
  const main = null || document.getElementById("root");
  main.innerHTML = await Template();
})();
