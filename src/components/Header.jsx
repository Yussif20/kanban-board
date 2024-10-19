import { useState } from 'react';
import { DropdownPrimitive, DialogPrimitive } from './index.js';
import iconVerticalEllipsis from '@assets/icon-vertical-ellipsis.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const onEditBoard = () => setOpen(true);
  const onDeleteBoard = () => {
    if (window.confirm('Are you sure you want to delete')) {
      console.log('Delete Board');
    }
  };
  return (
    <header className="flex items-center shrink-0 h-[97px]">
      <div className="flex w-[300px] items-center gap-4 self-stretch border-b border-r border-lines-light pl-8 text-[32px] font-bold">
        Kanban
      </div>
      <div className="flex flex-1 items-center justify-between self-stretch border-b border-lines-light pl-6 pr-6">
        <h2 className="text-heading-xl">Platform Launch</h2>
        <DropdownPrimitive
          items={{
            edit: {
              label: 'Edit Board',
              onClick: onEditBoard,
            },
            delete: {
              label: 'Delete Board',
              onClick: onDeleteBoard,
            },
          }}
          triggerComponent={() => (
            <button className="flex items-center gap-2 text-[14px] font-bold text-main-purple">
              <img
                className="p-4"
                src={iconVerticalEllipsis}
                alt="Icon Vertical Ellipsis"
              />
            </button>
          )}
        />
        <DialogPrimitive isOpen={open} setOpen={setOpen} title="Edit Board" />
      </div>
    </header>
  );
};
