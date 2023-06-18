import "./kanban.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { mockData } from "./mockData";
import { useState } from "react";
import TaskCard from "../cardComponent";
import { Box, Typography } from "@mui/material";

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={ onDragEnd }>
      <div className="kanban">
        { data.map((section) => (
          <Droppable key={ section.id } droppableId={ section.id }>
            { (provided) => (
              <div
                { ...provided.droppableProps }
                className="kanban__section"
                ref={ provided.innerRef }
              >
                <Box sx={ { display: 'flex', borderBottom: `3px solid ${getTitleBasedColor(section.title)}`, py: '23px', mb: '23px', alignItems: 'center' } }>

                  <div style={ { height: '16px', width: '16px', borderRadius: '16px', backgroundColor: getTitleBasedColor(section.title) } } />
                  <Typography sx={ { fontSize: 18, ml: 2 } }>
                    { section.title }
                  </Typography>
                  <Typography sx={ { lineHeight: '24px', textAlign: 'center', backgroundColor: '#E0E0E0', height: '24px', width: '24px', ml: 1, borderRadius: '100px' } }>{ section.tasks.length }</Typography>
                </Box>
                <div className="kanban__section__content">
                  { section.tasks.map((task, index) => (
                    <Draggable
                      key={ task.id }
                      draggableId={ task.id }
                      index={ index }
                    >
                      { (provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ {
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          } }
                        >
                          <TaskCard data={ task } />
                        </div>
                      ) }
                    </Draggable>
                  )) }
                  { provided.placeholder }
                </div>
              </div>
            ) }
          </Droppable>
        )) }
      </div>
    </DragDropContext>
  );
};

export default Kanban;


const getTitleBasedColor = (title) => {
  switch (title) {
    case "To Do":
      return '#5030E5';
    case 'On Progress':
      return '#FFA500';
    case 'Done':
      return '#8BC48A';
    default:
      return '#fff';
  }
}