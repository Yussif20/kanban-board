import { DataContext } from '@/DataContext';
import { Card } from './index';
import { useContext } from 'react';
import { produce } from 'immer';

export const Column = ({ id, title, tasks = [], columnIndex }) => {
  const { data, setData, selectedBoardIndex } = useContext(DataContext);

  const createNewTask = () => ({
    id: Date.now(),
    title: 'New Task',
  });
  const createNewColumnsArray = (dataArray, boardIndex, newTask) => {
    return dataArray[boardIndex].columns.map((column) => {
      if (column.id === id) {
        return {
          ...column,
          tasks:
            [...column.tasks].length > 0
              ? [...column.tasks, newTask]
              : [newTask],
        };
      }
      return column;
    });
  };

  const addNewTaskHandler = () => {
    const newTask = createNewTask();
    const newColumns = createNewColumnsArray(data, selectedBoardIndex, newTask);

    setData((prev) =>
      produce(prev, (draft) => {
        draft[selectedBoardIndex].columns = newColumns;
      })
    );
  };
  const onDeleteHandler = () => {
    if (window.confirm(`Are you sure you want to delete (${title}) column ?`)) {
      setData((prev) =>
        produce(prev, (draft) => {
          draft[selectedBoardIndex].columns = draft[
            selectedBoardIndex
          ].columns.filter((column) => column.id !== id);
        })
      );
    }
  };
  return (
    <div className="flex w-72 shrink-0 flex-col self-start rounded-lg bg-lines-light px-2 shadow">
      <h2 className="group/column relative top-0 rounded  bg-lines-light px-2 py-4 text-heading-s">
        {title}({tasks.length})
        <button
          className="absolute bottom-0 right-0 top-0 p-2 text-body-m text-red opacity-0 duration-300 focus:opacity-100 group-hover/column:opacity-100"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </h2>
      <div className="flex flex-col gap-5 mb-5">
        {tasks.map((task, index) => (
          <Card
            key={task.id}
            title={task.title}
            cardId={task.id}
            columnId={id}
            cardIndex={index}
            columnIndex={columnIndex}
          />
        ))}
      </div>
      <button
        onClick={addNewTaskHandler}
        className="-mx-2 mt-auto border-t border-light-grey bg-lines-light px-2 py-4 text-heading-m text-medium-grey"
      >
        + Add New Task
      </button>
    </div>
  );
};
