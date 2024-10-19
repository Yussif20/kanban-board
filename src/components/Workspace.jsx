import { Column } from './index.js';

export const WorkSpace = () => {
  return (
    <div className="flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto bg-light-grey p-6">
      <Column />
      <Column />
      <button className="w-72 shrink-0 self-start rounded-md bg-lines-light p-3 text-heading-l text-medium-grey">
        + New Column
      </button>
    </div>
  );
};
