import { createContext, useState } from 'react';

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
