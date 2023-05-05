import { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';
import './Droppable.css';

interface DroppableProps {
    id: string
    text?: string;
    children?: any;
};

const Droppable: FC<DroppableProps> = (props): JSX.Element => {
 
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? '#0F5B30' : undefined
    };

    return (
        <div className='drop-container' ref={setNodeRef} style={style}>
            <span className='text'>{props.text}</span>
            {props.children}
        </div>
    );
}

export default Droppable;
