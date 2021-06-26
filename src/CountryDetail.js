import React from 'react';
import CountryList from './countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {
    ccn3: '',
    name: '',
    capital: '',
    area: 0,
    borders: [],
  };

  searchCountry = () => {
    if (!this.state.name) {
      let findCountry = CountryList.find((Country) => {
        return Country.ccn3 === this.props.match.params.dinossauro;
      }
      
      )

      if (findCountry) {
        this.setState({ ...findCountry });
      }
    }
  };

  render() {
    this.searchCountry();

    return (
      <div class="countryDetails">
        <h1>{this.state.name.common}</h1>
        <hr />
        <span>
          Capital <strong class="countryInfo">{this.state.capital}</strong>
        </span>
        <hr />
        <span>
          Area <strong class="countryInfo">{this.state.area} km²</strong>
        </span>
        <hr />
        <div class="d-flex">
          <span>Borders</span>
          <ul>
            {this.state.borders.map((borders) => {
              return (
                <li
                  class="countryInfo"
                  key={borders}
                  to={`/${this.state.ccn3}`}
                >
                  <Link>{borders}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
