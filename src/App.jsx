import { SideMenu, Header, WorkSpace } from '@components/index.js';
import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';

function App() {
  const [data, setData] = useState();
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
    if (!data) return;
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data: data || [],
        setData,
        selectedBoardIndex,
        setSelectedBoardIndex,
      }}
    >
      <div className="h-screen font-plus-jakarta flex flex-col">
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
