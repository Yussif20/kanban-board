import { SideMenu, Header, WorkSpace } from '@components/index.js';
import { useState } from 'react';
import { DataContext } from './DataContext';

function App() {
  const [data, setData] = useState([]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        selectedBoardIndex,
        setSelectedBoardIndex,
      }}
    >
      <div className="h-screen font-plus-jakarta flex flex-col">
        <Header />
        <div className="flex flex-1">
          <SideMenu
            selectedBoardIndex={selectedBoardIndex}
            setSelectedBoardIndex={setSelectedBoardIndex}
          />
          <WorkSpace columns={data[selectedBoardIndex]?.columns} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
