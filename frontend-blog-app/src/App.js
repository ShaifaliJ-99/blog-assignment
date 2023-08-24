import './App.css';
import { AllRoutes } from './component/AllRoutes';
import { Link } from 'react-router-dom';
import Login from './component/login';
function App() {
  return (
    <div className="App">

      <Login/>
      {/* <AllRoutes/> */}
    </div>
  );
}

export default App;
