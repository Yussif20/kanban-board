import { SideMenu, Header, WorkSpace } from '@components/index.js';
import { useContext, useState } from 'react';
import DataContextProvider, { DataContext } from './DataContext';

function App() {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  const { data } = useContext(DataContext);

  return (
    <DataContextProvider>
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
    </DataContextProvider>
  );
}

export default App;
