import { useContext } from 'react';
import { Column } from './index.js';
import { DataContext } from '@/DataContext.jsx';

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
  const { data, selectedBoardIndex } = useContext(DataContext);
  const columns = data[selectedBoardIndex]?.columns;
  return (
    <div className="flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto bg-light-grey p-6">
      {columns?.length &&
        columns.map((column) => (
          <Column key={column.id} title={column.title} tasks={column.tasks} />
        ))}
      <button className="w-72 shrink-0 self-start rounded-md bg-lines-light p-3 text-heading-l text-medium-grey">
        + New Column
      </button>
    </div>
  );
};
