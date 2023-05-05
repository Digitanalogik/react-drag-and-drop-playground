import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Droppable from './Components/Droppable/Droppable';
import Draggable from './Components/Draggable/Draggable';
import './App.css';

const App = (): JSX.Element => {

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable text="Drag me" />
  );

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id == 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable text="Drop Container">
          {isDropped ? draggableMarkup : 'Move drag element here'}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default App;
