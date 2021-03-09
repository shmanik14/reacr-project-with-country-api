import './App.css';
import Countries from './components/countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Errorpage from './components/Error/Errorpage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Countries></Countries>
          </Route>
          <Route to path="/country/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <Errorpage></Errorpage>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
