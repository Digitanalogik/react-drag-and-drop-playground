import { DndContext } from '@dnd-kit/core';
import Droppable from './Components/Droppable/Droppable';
import Draggable from './Components/Draggable/Draggable';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <DndContext>
        <Droppable text="Drop Container" />
        <Draggable text="Drag Element" />
      </DndContext>
    </div>
  );
}

export default App;
