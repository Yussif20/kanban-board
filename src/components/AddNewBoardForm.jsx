import { useContext, useState } from 'react';
import { Button, TextField } from './index';
import iconCross from '@assets/icon-cross.svg';
import { DataContext } from '@/DataContext';

const AddNewBoardForm = ({ toggleDialog }) => {
  const [columnsArray, setColumnsArray] = useState([{ id: Date.now() }]);
  const { setData, setSelectedBoardIndex } = useContext(DataContext);

  const removeColumnHandler = (id) => {
    setColumnsArray((prevArr) => prevArr.filter((column) => column.id !== id));
  };
  const addNewColumnHandler = () => {
    setColumnsArray((prevArr) => [...prevArr, { id: Date.now() }]);
  };

  const createNewColumnsArray = (formData, columnsArray) => {
    return columnsArray.map((column) => {
      return {
        id: column.id,
        title: formData.get(column.id),
        tasks: [],
      };
    });
  };
  const updateData = (boardName, newColumnsArray, setData) => {
    setData((prevData) => {
      setSelectedBoardIndex(prevData.length);
      return [
        ...prevData,
        {
          id: Date.now(),
          title: boardName,
          columns: newColumnsArray,
        },
      ];
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add board to database or other storage
    const formData = new FormData(e.target);
    const boardName = formData.get('boardName');
    const newColumnsArray = createNewColumnsArray(formData, columnsArray);
    // Update the data state with the new board and columns
    updateData(boardName, newColumnsArray, setData);
    toggleDialog(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h3 className="pb-2 pt-6 text-body-m text-medium-grey">Name</h3>
        <TextField placeholder="e.g. Web Design" name="boardName" required />
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
          Create New Board
        </Button>
      </div>
    </form>
  );
};

export default AddNewBoardForm;
