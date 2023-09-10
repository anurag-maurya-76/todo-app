import { render } from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Homepage from "./pages/HomePage";

export const App = () => {
   return (
      <div className="App">
         <DndProvider backend={HTML5Backend}>
            <Homepage />
         </DndProvider>
      </div>
   );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
