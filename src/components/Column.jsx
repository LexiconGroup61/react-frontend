import {useDroppable} from "@dnd-kit/react";

const Column = ({id, children, heading}) => {

    const { ref } = useDroppable({
        id: id + "-droppable"
    })
    return (
        <div className="flex flex-col h-screen w-3xs border-4 border-gray-500" ref={ref}>
            <h2>{heading}</h2>
            {children}
        </div>
    );
};

export default Column;