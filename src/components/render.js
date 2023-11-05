import React, { useState } from 'react';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  function handleClick(tab){
    setActiveTab(tab)
  }

  return (
    <div>
      <ul>
        {
          tabs.map((tab)=>{
            return (
              <li onClick={()=>{
                handleClick(tab.title)
              }}>{tab.title}</li>
            )
          })

        }
      </ul>
      <p>This is the content for {activeTab}.</p>
    </div>
  )
  
}

export default Tabs;