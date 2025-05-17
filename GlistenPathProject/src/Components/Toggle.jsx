import React ,{useState} from 'react';

const Toggle = () => {
    const [Mode,setMode] = useState("light");
    const handleclick  = ()=>{
        if(Mode === "light")
        {
            setMode("dark")
            document.body.style.backgroundColor= "black";

        }
        else{
             setMode("light")
            document.body.style.backgroundColor= "White";

            
        }
    }
  return (
    <div>
      <button onClick={handleclick}>{Mode}</button>
    </div>
  );
}

export default Toggle;
