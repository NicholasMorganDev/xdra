import { Link } from 'react-router-dom';

export default function Nav () {

  return (
    <div className="nav-bg">
      <nav>
          <Link to={"/"}><img className="logo" src="https://nicholasmorgandev.github.io/xdra/src/assets/logo.png" alt="Logo" /></Link>
        <ul>
          <li><Link to={"/about-us"}>About Us</Link></li>
          <li><Link to={"/training"}>Training Services</Link></li>
          <li><Link to={"/bpo"}>Business Services</Link></li>
        </ul>
      </nav>
    </div>
  )
}