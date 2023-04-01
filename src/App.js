import './App.css';
// import  {BrowserRouter} from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Headers from './components/Header/Headers';
import Footers from './components/Footer/Footers';
import Overview from './components/Pages/Overview/Overview';






function App() {
  return (
    
    <div className="App">
      <Headers/>
      {/* <AppRoutes/> */}
      <div id='map_body'>
        <Overview/>
      </div>
      <Footers/>
    </div>
  );
}

export default App;
