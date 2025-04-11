import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CustomDragDrop = ({ list = [], children, onOrderChange, className }) => {
  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    onOrderChange(result);
  };

  return (
    <div className={`flex flex-col w-full`}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div className={`${className}`} {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => (
                <Draggable key={index} draggableId={index} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        margin: '0 0 8px 0',
                        padding: '8px'
                      }}
                    >
                      {children(item, index)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CustomDragDrop;
