import { Link } from 'react-router-dom';

export default function Nav () {

  return (
    <div className="nav-bg">
      <nav>
          <Link to={"/"}><img className="logo" src="https://nicholasmorgandev.github.io/xdra/src/assets/xDRA_LOGO.jpg" alt="Logo" /></Link>
        <ul>
          <li><Link to={"/about-us"}>Who We Are</Link></li>
          <li><Link to={"/training"}>What We Do</Link></li>
          {/* <li><Link to={"/bpo"}>Business Services</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}