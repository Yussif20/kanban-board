import { useContext, useMemo } from 'react';
import { Column } from './index.js';
import { DataContext } from '@/DataContext.jsx';
import { produce } from 'immer';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

/**
 *
 * @param {Object} props
 * @param {Array} props.columns
 * @param {Object} props.columns.id
 * @param {Array} props.columns.tasks
 * @param {String} props.columns.title
 * @returns {JSX.Element}
 */

export const WorkSpace = () => {
  const { data, selectedBoardIndex, setData } = useContext(DataContext);

  const columns = data[selectedBoardIndex]?.columns;

  const createNewColumn = (num) => {
    return {
      id: Date.now(),
      title: `New Column ${num}`,
      tasks: [],
    };
  };

  const addNewColumnHandler = () => {
    const num = data[selectedBoardIndex].columns.length + 1;
    const newColumn = createNewColumn(num);

    setData((prevData) =>
      produce(prevData, (draft) => {
        draft[selectedBoardIndex].columns.push(newColumn);
      })
    );
  };

  const tasksIds = useMemo(() => {
    let tasksIds = [];

    if (!columns || columns.length === 0) return tasksIds;

    for (let column of columns) {
      tasksIds = [...tasksIds, ...column.tasks.map((task) => task.id)];
    }
    return tasksIds;
  }, [columns]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );
  const onDragEndHandler = (event) => {
    const { active, over } = event;

    const activeId = active.id;
    const activeColumnId = active.data.current.columnId;
    const overId = over.id;
    const overColumnId = over.data.current.columnId;

    if (activeId === overId) return;

    if (activeColumnId === overColumnId) {
      const newColumns = columns.map((column) => {
        if (column.id === activeColumnId) {
          const activeIdIndex = column.tasks.findIndex(
            (task) => task.id === activeId
          );
          const overIdIndex = column.tasks.findIndex(
            (task) => task.id === overId
          );
          const tasks = arrayMove(column.tasks, activeIdIndex, overIdIndex);
          return { ...column, tasks };
        }
        return column;
      });
      setData((prevData) =>
        produce(prevData, (draft) => {
          draft[selectedBoardIndex].columns = newColumns;
        })
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEndHandler}
    >
      <div className="flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto bg-light-grey p-6">
        <SortableContext
          items={tasksIds}
          strategy={verticalListSortingStrategy}
        >
          {columns?.length &&
            columns.map((column, index) => (
              <Column
                id={column.id}
                key={column.id}
                title={column.title}
                tasks={column.tasks}
                columnIndex={index}
              />
            ))}
        </SortableContext>
        <button
          className="w-72 shrink-0 self-start rounded-md bg-lines-light p-3 text-heading-l text-medium-grey"
          onClick={addNewColumnHandler}
        >
          + New Column
        </button>
      </div>
    </DndContext>
  );
};
