import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Droppable from './Components/Droppable/Droppable';
import Draggable from './Components/Draggable/Draggable';
import './App.css';

const App = (): JSX.Element => {

  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState<string | null>(null);

  const draggableMarkup = (
    <Draggable id="draggable" text="Drag me" />
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id.toString() : null);
  };

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {containers.map((id) => (
          <Droppable id={id} key={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
        ))}
        {parent == null ? draggableMarkup : null}
      </DndContext>
    </div>
  );
}

export default App;
