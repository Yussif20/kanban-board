import { createContext, useState } from 'react';
// import data from './data.json';

export const DataContext = createContext({
  data: [],
  setData: () => {},
});

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
