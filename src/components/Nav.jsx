import { Link } from 'react-router-dom';

export default function Nav () {

  return (
    <div className="nav-bg">
      <nav>
        <ul>
          <li><img src="../assets/logo.png" alt="Logo" /></li>
          <li><Link to={"/about-us"}>About Us</Link></li>
          <li>Training Services</li>
          <li>Business Services</li>
        </ul>
      </nav>
    </div>
  )
}