import { SideMenu, Header, WorkSpace } from '@components/index.js';
import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';

function App() {
  const [dataState, setDataState] = useState(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error('Error parsing saved data:', error);
        return [];
      }
    }
    return [];
  });

  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  useEffect(() => {
    if (dataState.length > 0) {
      localStorage.setItem('data', JSON.stringify(dataState));
    }
  }, [dataState]);

  return (
    <DataContext.Provider
      value={{
        data: dataState,
        setData: setDataState,
        selectedBoardIndex,
        setSelectedBoardIndex,
      }}
    >
      <div className="flex h-screen flex-col font-jakarta">
        <Header />
        <div className="flex flex-1">
          <SideMenu />
          <WorkSpace />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
//TODO: fix the edit board bug
