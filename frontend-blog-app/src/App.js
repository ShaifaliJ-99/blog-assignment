import './App.css';
import { AllRoutes } from './component/AllRoutes';
import { Link } from 'react-router-dom';
import Registration from './component/registration';
function App() {
  return (
    <div className="App">

      <Registration/>
      {/* <AllRoutes/> */}
    </div>
  );
}

export default App;
