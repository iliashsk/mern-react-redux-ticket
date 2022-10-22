import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Example from "./components/Example"

const root=ReactDOM.createRoot(document.getElementById("root"));

const boss=[{name:"iliash",vill:"ghasuria danga"},{name:"jahangir",vill:"ghasuria danga"}];
const [boss1,boss2]=boss;

console.log(boss1);


root.render(<div>

	<App />
  <Example/>
</div>
	);
