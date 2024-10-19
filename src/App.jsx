import { SideMenu, Header, WorkSpace } from '@components/index.js';

function App() {
  return (
    <div className="h-screen font-plus-jakarta flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideMenu />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;
