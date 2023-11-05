
import React from "react";
import './../styles/App.css';
import Tabs from "./render";

let arr = [{title:"Tab 1"},{title:"Tab 2"},{title:'Tab 3'}]
const App = () => {
  console.log(arr)
  return (
    
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={arr} />
    </div>
  );

  
}

export default App
