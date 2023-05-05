import { DndContext } from '@dnd-kit/core';
import Droppable from './Components/Droppable/Droppable';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <DndContext>
        <Droppable text="Drop Container" />
      </DndContext>
    </div>
  );
}

export default App;
