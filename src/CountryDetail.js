import React from 'react';
import CountryList from './countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: [],
  };

  componentDidMount = () => {
    this.searchCountry();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.cca3 !== prevProps.match.params.cca3) {
      this.searchCountry();
    }
  };

  searchCountry = () => {
    let findCountry = CountryList.find((Country) => {
      return Country.cca3 === this.props.match.params.cca3;
    });

    if (findCountry) {
      this.setState({
        name: findCountry.name.common,
        capital: findCountry.capital.join(', '),
        area: findCountry.area,
        borders: [...findCountry.borders],
      });
    }
  };

  getBorderCommonName = (cca3) => {
    const country = CountryList.find((Country) => {
      return Country.cca3 === cca3;
    });

    if (country) {
      return country.name.common;
    }
    return '';
  };

  render() {
    return (
      <div class="countryDetails">
        <h1>{this.state.name}</h1>
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
                <li class="countryInfo" key={borders}>
                  <Link to={`/${borders}`}>
                    {this.getBorderCommonName(borders)}
                  </Link>
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
