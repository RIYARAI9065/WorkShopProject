 import React, { useState ,useEffect } from 'react';

const ToggleUSingHooks = () => {
    const [Mode,setMode] = useState("light");
    useEffect(() => {
      
        if(Mode === "dark")
        {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "black";
        }
        else
        {
            
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        
    }, [Mode]);
    const handleclick = () =>
    {
setMode(prevMode =>(prevMode === "light" ? "dark":"light"))
    }
  return (
    <div>
      <button onClick={handleclick}>Switch to {Mode === "light" ? "Dark" : "Light"} Mode
</button>
    </div>
  );
}

export default ToggleUSingHooks;
