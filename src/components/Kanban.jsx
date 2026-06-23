import {DragDropProvider} from "@dnd-kit/react";
import Ticket from "@/components/Ticket.jsx";
import Column from "@/components/Column.jsx";
import {useState} from "react";


const Kanban = () => {
    const headings = [{
        heading: "Backlog",
        id: 1
    }, {
        heading: "To Do",
        id: 2
    }, {
        heading: "Doing",
        id: 3
    }, {
        heading: "Done",
        id: 4
    }
    ];
    const [column, setColumn] = useState(1);

    return (
        <DragDropProvider
            onDragEnd={(e) => {
                let newId = e.operation.target?.id.toString();
                let num = newId.split("-")[0];
                setColumn(parseInt(num))
            }}
        >
            <div className="flex flex-row">
                {headings.map((item) => (
                    <Column id={item.id} heading={item.heading}>
                        { column === item.id &&  <Ticket />}
                    </Column>
                ))}


            </div>
        </DragDropProvider>

    );
};

export default Kanban;