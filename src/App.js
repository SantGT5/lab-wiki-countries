import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';

import CountriesList from './CountriesList';
import CountryDetails from './CountryDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div class="d-flex align-items-stretch">
          <Route path="/" component={CountriesList} />
          <Route path="/:cca3" component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
