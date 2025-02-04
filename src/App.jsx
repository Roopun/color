import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-100"
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-1 px-2 ">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-slate-50 px-3 py-2 rounded-full">
          <button
          onClick={() => setColor("red")} 
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={() => setColor("blue")} 
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("yellow")} 
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button 
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-md"
          style={{backgroundColor:"gray"}}
          >Gray</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
