import { Card } from './index';

export const Column = () => {
  return (
    <div className="flex w-72 shrink-0 flex-col self-start   rounded-lg bg-lines-light px-2 shadow">
      <h2 className="group/column relative top-0 rounded  bg-lines-light px-2 py-4 text-heading-s">
        TODO (3)
      </h2>
      <div className="flex flex-col gap-5 mb-5">
        <Card />
        <Card />
        <Card />
      </div>
      <button className="-mx-2 mt-auto border-t border-light-grey bg-lines-light px-2 py-4 text-heading-m text-medium-grey">
        + Add New Task
      </button>
    </div>
  );
};
