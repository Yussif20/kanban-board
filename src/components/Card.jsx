import { DataContext } from '@/DataContext';
import { useContext, useState } from 'react';
import { produce } from 'immer';

export const Card = ({ cardId, columnId, title, columnIndex, cardIndex }) => {
  const [isEditMode, setIsEditMode] = useState(false);
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

  const onEditModeToggle = () => {
    setIsEditMode(true);
  };
  const onFocusHandler = (e) => {
    e.target.select();
  };
  const onBlurHandler = (e) => {
    setIsEditMode(false);
    if (e.target.value.trim() === title) return;
    setData((prev) =>
      produce(prev, (draft) => {
        draft[selectedBoardIndex].columns[columnIndex].tasks[cardIndex].title =
          e.target.value.trim();
      })
    );
  };

  const onKeyDownHandler = (e) => {
    e.key === 'Enter' && e.target.blur();
  };
  return (
    <div className="group/card relative min-h-16 overflow-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      {isEditMode ? (
        <textarea
          defaultValue={title}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onKeyDown={onKeyDownHandler}
          autoFocus
          className="h-full resize-none text-heading-m outline-light-grey"
        />
      ) : (
        <button
          className="peer h-full text-start text-heading-m"
          onClick={onEditModeToggle}
        >
          {title}
        </button>
      )}
      <button
        className="absolute bottom-0 right-0 top-0 bg-white p-2 text-body-m text-red opacity-0 shadow duration-300 focus:opacity-100 group-hover/card:opacity-100 peer-focus:opacity-100"
        onClick={onDeleteHandler}
      >
        Delete
      </button>
    </div>
  );
};
