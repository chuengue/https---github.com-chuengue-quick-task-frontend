import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
