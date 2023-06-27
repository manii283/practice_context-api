import "./App.css";
import ComA from "./ComA";
import { createContext } from "react";

const FirstName = createContext();
// const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"manisha"}>
         <ComA/>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName };
