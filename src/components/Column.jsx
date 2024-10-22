import { DataContext } from '@/DataContext';
import { Card } from './index';
import { useContext } from 'react';

export const Column = ({ id, title, tasks = [] }) => {
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

    setData((prevData) => {
      const newData = [...prevData];

      newData[selectedBoardIndex] = {
        ...newData[selectedBoardIndex],
        columns: newColumns,
      };
      return newData;
    });
  };
  return (
    <div className="flex w-72 shrink-0 flex-col self-start   rounded-lg bg-lines-light px-2 shadow">
      <h2 className="group/column relative top-0 rounded  bg-lines-light px-2 py-4 text-heading-s">
        {title}({tasks.length})
      </h2>
      <div className="flex flex-col gap-5 mb-5">
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            cardId={task.id}
            columnId={id}
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
