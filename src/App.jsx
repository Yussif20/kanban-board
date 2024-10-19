import { SideMenu, Header, WorkSpace } from '@components/index.js';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  const [dataState, setDataState] = useState(data);

  return (
    <div className="h-screen font-plus-jakarta flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideMenu
          data={dataState}
          selectedBoardIndex={selectedBoardIndex}
          setSelectedBoardIndex={setSelectedBoardIndex}
        />
        <WorkSpace columns={dataState[selectedBoardIndex]?.columns} />
      </div>
    </div>
  );
}

export default App;
