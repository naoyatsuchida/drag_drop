import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dummyDatas } from "../dummyData";
import { Cards } from "./Cards";
export const Main = () => {
  const [data, setData] = useState(dummyDatas);

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sorceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];
      const sorceTask = [...sorceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      const [removed] = sorceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sorceTask;
      data[destinationColIndex].tasks = destinationTask;
      setData(data);
    } else {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const sorceCol = data[sourceColIndex];
      console.log(sorceCol);
      const sorceTask = [...sorceCol.tasks];
      const [removed] = sorceTask.splice(source.index, 1);
      sorceTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sorceTask;
      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="trello">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                className="trello-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="trello-section-title">{section.title}</div>
                <div className="trello-section-content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Cards>{task.title}</Cards>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
