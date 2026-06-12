import { useDraggable } from "@dnd-kit/react";
const Ticket = () => {

    const { ref } = useDraggable({
        id: "draggable"
    });

    return (
        <div ref={ref}>
            <p>To be dragged</p>
        </div>
    );
};

export default Ticket;