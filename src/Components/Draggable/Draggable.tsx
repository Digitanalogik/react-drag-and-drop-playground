import { FC } from 'react';
import { useDraggable } from "@dnd-kit/core";
import './Draggable.css';

interface DraggableProps {
    id: string;
    text: string;
    children?: any;
};

const Draggable: FC<DraggableProps> = (props): JSX.Element => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable'
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        backgroundColor: '#27556C'
    } : undefined;

    return (
        <div className="drag-element" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <span className='text'>{props.text}</span>
            {props.children}
        </div>
    );
}

export default Draggable;
