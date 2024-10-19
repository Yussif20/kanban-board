import clsx from 'clsx';
import { useState } from 'react';
import { DialogPrimitive } from './index.js';
import iconBoard from '@assets/icon-board.svg';

export const SideMenu = ({
  data = [],
  selectedBoardIndex,
  setSelectedBoardIndex,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="side-menu mt-px w-[300px] border-r border-lines-light bg-white">
      <p className="px-8 py-4 text-heading-s">ALL BOARDS ({data.length})</p>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={item.id}>
              <button
                className={clsx(
                  'flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4 text-heading-m text-medium-grey transition data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple',
                  {
                    'bg-main-purple !text-white hover:bg-main-purple':
                      selectedBoardIndex === index,
                  }
                )}
                data-isactive={selectedBoardIndex === index} /// tailwind css feature that help with make styles more dynamic
                onClick={() => setSelectedBoardIndex(index)}
              >
                <img src={iconBoard} alt="Icon Board" />
                {item.title}
              </button>
            </li>
          );
        })}
        <li className="px-8 py-4">
          <DialogPrimitive
            isOpen={open}
            setOpen={setOpen}
            title="Create New Board"
            triggerComponent={
              <button className="flex w-full items-center gap-4 text-heading-m text-main-purple">
                <img src={iconBoard} alt="Icon Board" /> + Create New Board
              </button>
            }
          />
        </li>
      </ul>
    </aside>
  );
};
