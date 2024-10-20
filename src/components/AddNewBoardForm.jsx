import { Button, TextField } from './index';
import iconCross from '@assets/icon-cross.svg';

const AddNewBoardForm = () => {
  return (
    <form>
      <div>
        <h3 className="pb-2 pt-6 text-body-m text-medium-grey">Name</h3>
        <TextField placeholder="e.g. Web Design" name="boardName" required />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="pt-6 text-body-m text-medium-grey">Columns</h3>
        <div className="flex items-center gap-4">
          <TextField placeholder="e.g. To Do" name="boardName" required />
          <button onClick={false}>
            <img src={iconCross} alt="Icon Cross" />
          </button>
        </div>
      </div>
      <Button type="button" size="sm" variant="secondary" isFullWidth>
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
