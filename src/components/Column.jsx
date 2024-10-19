import { Card } from './index';

export const Column = ({ title, tasks = [] }) => {
  return (
    <div className="flex w-72 shrink-0 flex-col self-start   rounded-lg bg-lines-light px-2 shadow">
      <h2 className="group/column relative top-0 rounded  bg-lines-light px-2 py-4 text-heading-s">
        {title}({tasks.length})
      </h2>
      <div className="flex flex-col gap-5 mb-5">
        {tasks.map((task) => (
          <Card key={task.id} title={task.title} />
        ))}
      </div>
      <button className="-mx-2 mt-auto border-t border-light-grey bg-lines-light px-2 py-4 text-heading-m text-medium-grey">
        + Add New Task
      </button>
    </div>
  );
};
