import React from 'react';
import { NavLink } from 'react-router-dom';
import CountryList from './countries.json';

class CountriesList extends React.Component {
  state = {
    newArr: [...CountryList],
  };

  render() {
    return (
      <div>
        {this.state.newArr.map((newArr) => {
          return (
            <div key={newArr.ccn3} className="ListCountry">
              <NavLink
                activeClassName="active"
                to={`/${newArr.ccn3}`}
                className="list-group-item list-group-item-action"
              >
                {newArr.flag}&nbsp;&nbsp;&nbsp;{newArr.name.common}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
