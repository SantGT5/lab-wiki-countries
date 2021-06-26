import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="NavList navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            WikiCountries
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
