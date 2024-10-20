import clsx from 'clsx';
import { useContext, useState } from 'react';
import { DialogPrimitive } from './index.js';
import iconBoard from '@assets/icon-board.svg';
import { DataContext } from '../DataContext.jsx';
import AddNewBoardForm from './AddNewBoardForm.jsx';

/**
 *
 * @param {Object} props
 * @param {Number} props.selectedBoardIndex
 * @param {Function} props.setSelectedBoardIndex
 * @param {String} props.columns.title
 * @returns {JSX.Element}
 */

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const { data, selectedBoardIndex, setSelectedBoardIndex } =
    useContext(DataContext);

  return (
    <aside className="side-menu mt-px w-[300px] border-r border-lines-light bg-white">
      <p className="px-8 py-4 text-heading-s">
        ALL BOARDS ({data?.length || 0})
      </p>
      <ul>
        {data?.map((item, index) => {
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
            description="Open A New Form That Help In Add New Board"
            title="Create New Board"
            triggerComponent={
              <button className="flex w-full items-center gap-4 text-heading-m text-main-purple">
                <img src={iconBoard} alt="Icon Board" /> + Create New Board
              </button>
            }
          >
            <AddNewBoardForm toggleDialog={setOpen} />
          </DialogPrimitive>
        </li>
      </ul>
    </aside>
  );
};
