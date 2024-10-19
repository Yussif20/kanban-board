import { SideMenu, Header } from '@components/index.js';

function App() {
  return (
    <div className="h-screen font-plus-jakarta flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
