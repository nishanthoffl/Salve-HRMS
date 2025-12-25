import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/employee-data">Employee Data</Link>
    </nav>
  );
}

export default Navbar;