import { useContext, useState } from 'react';
import { Button, TextField } from './index';
import iconCross from '@assets/icon-cross.svg';
import { DataContext } from '@/DataContext';

const AddNewBoardForm = ({
  toggleDialog,
  boardId,
  columns = [{ id: Date.now() }],
  title,
}) => {
  const [columnsArray, setColumnsArray] = useState(columns);
  const { setData, setSelectedBoardIndex } = useContext(DataContext);

  const removeColumnHandler = (id) => {
    setColumnsArray((prevArr) => prevArr.filter((column) => column.id !== id));
  };
  const addNewColumnHandler = () => {
    setColumnsArray((prevArr) => [...prevArr, { id: Date.now() }]);
  };

  const createNewColumnsArray = (formData, columnsArray, boardId) => {
    return columnsArray.map((column) => {
      const tasksArray = boardId ? columnsArray.tasks : [];
      return {
        id: column.id,
        title: formData.get(column.id),
        tasks: tasksArray,
      };
    });
  };
  const updateData = (boardName, newColumnsArray, setData, boardId) => {
    setData((prevData) => {
      let newData;
      if (boardId) {
        newData = prevData.map((item) => {
          if (item.id === boardId) {
            return {
              ...item,
              title: boardName,
              columns: newColumnsArray,
            };
          }
          return item;
        });
      } else {
        [
          ...prevData,
          {
            id: Date.now(),
            title: boardName,
            columns: newColumnsArray,
          },
        ];
        setSelectedBoardIndex(prevData.length);
      }
      return newData;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const boardName = formData.get('boardName');
    const newColumnsArray = createNewColumnsArray(
      formData,
      columnsArray,
      boardId
    );
    updateData(boardName, newColumnsArray, setData, boardId);
    toggleDialog(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h3 className="pb-2 pt-6 text-body-m text-medium-grey">Name</h3>
        <TextField
          placeholder="e.g. Web Design"
          defaultValue={title}
          name="boardName"
          required
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="pt-6 text-body-m text-medium-grey">Columns</h3>
        {columnsArray.map((obj) => (
          <div key={obj.id} className="flex items-center gap-4">
            <TextField
              placeholder="e.g. Web Design"
              name={obj.id}
              defaultValue={obj.title}
              required
            />
            <button type="button" onClick={() => removeColumnHandler(obj.id)}>
              <img src={iconCross} alt="icon cross" />
            </button>
          </div>
        ))}
      </div>
      <Button
        type="button"
        size="sm"
        variant="secondary"
        isFullWidth
        onClick={addNewColumnHandler}
      >
        + Add New Column
      </Button>
      <div className="mt-6">
        <Button type="submit" size="sm" variant="primary" isFullWidth>
          {!boardId ? ' Create New' : 'Update'} Board
        </Button>
      </div>
    </form>
  );
};

export default AddNewBoardForm;
