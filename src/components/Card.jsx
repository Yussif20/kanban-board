import { DataContext } from '@/DataContext';
import { useContext } from 'react';

export const Card = ({ cardId, columnId, title }) => {
  const { setData, selectedBoardIndex } = useContext(DataContext);

  const onDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      setData((prevData) => {
        const newData = [...prevData];
        const newColumns = newData[selectedBoardIndex].columns.map((column) => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== cardId),
            };
          }
          return column;
        });
        newData[selectedBoardIndex] = {
          ...newData[selectedBoardIndex],
          columns: newColumns,
        };

        return newData;
      });
    }
  };
  return (
    <div className="group/card relative min-h-16 overflow-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <h2 className="text-heading-m">{title}</h2>
      <button
        className="absolute bottom-0 right-0 top-0 bg-white p-2 text-body-m text-red opacity-0 shadow duration-300 focus:opacity-100 group-hover/card:opacity-100 peer-focus:opacity-100"
        onClick={onDeleteHandler}
      >
        Delete
      </button>
    </div>
  );
};
