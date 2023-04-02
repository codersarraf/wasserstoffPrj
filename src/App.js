import './App.css';
import AppRoutes from './components/AppRoutes';
import Headers from './components/Header/Headers';
import Footers from './components/Footer/Footers';

function App() {
  return (
    
    <div className="App">
      <Headers/>
      <AppRoutes/>
      <div id='map_body'>
        {/* <Overview/> */}
      </div>
      <Footers/>
    </div>
  );
}

export default App;
