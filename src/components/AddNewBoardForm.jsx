import { useState } from 'react';
import { Button, TextField } from './index';
import iconCross from '@assets/icon-cross.svg';

const AddNewBoardForm = () => {
  const [columnsArray, setColumnsArray] = useState([{ id: Date.now() }]);
  const removeColumnHandler = (id) => {
    setColumnsArray((prevArr) => prevArr.filter((column) => column.id !== id));
  };
  const addNewColumnHandler = () => {
    setColumnsArray((prevArr) => [...prevArr, { id: Date.now() }]);
  };
  return (
    <form>
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
