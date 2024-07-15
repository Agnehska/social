import List from "./components/List";
import { useMousePosition } from "./hooks/useMousePosition";
import StatusBar from "./hooks/useStatusBar";

const App: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <div>
        <h1>
          The mouse position: ({x}, {y})
        </h1>
      </div>
      <List />
      <List />
      <StatusBar />
    </div>
  );
}

export default App;