import {DragDropProvider} from "@dnd-kit/react";
import Ticket from "@/components/Ticket.jsx";
import Column from "@/components/Column.jsx";
import {useState} from "react";


const Kanban = () => {
    const [column, setColumn] = useState(0);
    return (
        <DragDropProvider
            onDragEnd={(e) => {
                let newId = e.operation.target?.id.toString();
                let num = newId.split("-")[0];
                setColumn(parseInt(num))

            }}
        >
            { column === 0 &&  <Ticket />}
            <div className="flex flex-row">
                <Column id="1" heading="Backlog">
                    { column === 1 &&  <Ticket />}
                </Column>
                <Column id="2" heading="To do">
                    { column === 2 &&  <Ticket />}
                </Column>
                <Column id="3" heading="Doing">
                    { column === 3 &&  <Ticket />}
                </Column>
                <Column id="4" heading="Done">
                    { column === 4 &&  <Ticket />}
                </Column>

            </div>
        </DragDropProvider>

    );
};

export default Kanban;