import clsx from 'clsx';
import { useState } from 'react';

const DATA = [
  {
    title: 'Home',
    id: 3,
  },
  {
    title: 'About',
    id: 3,
  },
  {
    title: 'Contact',
    id: 3,
  },
];

export const SideMenu = () => {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  return (
    <aside className="side-menu mt-px w-[300px] border-r border-lines-light bg-white">
      <p className="px-8 py-4 text-heading-s">ALL BOARDS ({DATA.length})</p>
      <ul>
        {DATA.map((item, index) => {
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
                onClick={() => setSelectedBoardIndex(index)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
