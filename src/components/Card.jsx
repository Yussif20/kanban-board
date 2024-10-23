import { DataContext } from '@/DataContext';
import { useContext, useState } from 'react';
import { produce } from 'immer';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const Card = ({ cardId, columnId, title, columnIndex, cardIndex }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { setData, selectedBoardIndex } = useContext(DataContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: cardId, data: { columnId } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      setData((prev) =>
        produce(prev, (draft) => {
          draft[selectedBoardIndex].columns[columnIndex].tasks.splice(
            cardIndex,
            1
          );
        })
      );
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
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="group/card relative min-h-16 overflow-hidden rounded-lg bg-white px-4 py-3 shadow-sm"
    >
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
