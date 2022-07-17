import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';
import Content from './components/Content';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <Content />
    </div>
  );
}

export default App;
