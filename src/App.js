import "./App.css";
import { useState } from "react";
import DraggableFile from "./components/DraggableFile";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "New Orders" },
    { id: 2, name: "Case in Progress" },
    { id: 3, name: "Cases Pending" },
    { id: 4, name: "Cases Canceled" },
    { id: 5, name: "Cases Delivered" },
  ]);

  const moveDrawer = (fromIndex, toIndex) => {
    const updatedDrawer = [...data];
    const [removed] = updatedDrawer.splice(fromIndex, 1);
    updatedDrawer.splice(toIndex, 0, removed);
    setData(updatedDrawer);
  };

  return (
    <>
      <div className="App">
        <h4>React Drag and Drop</h4>
        <div className="mt-5">
          {data.map((item, index) => (
            <DraggableFile
              key={index}
              id={item.id}
              index={index}
              onDrop={moveDrawer}
            >
              {console.log("item", item)}
              <h3 key={item.id}>
                My Name is : {item.name} and my Id is:{item.id}
              </h3>
            </DraggableFile>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
