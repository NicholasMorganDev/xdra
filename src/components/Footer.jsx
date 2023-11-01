import { Link } from "react-router-dom";

export default function Footer () {

  const currentYear = new Date().getFullYear();
  // const gitHubUrl = 'https://github.com/NicholasMorganDev'

  return (
    <footer>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about-us"}>Who We Are</Link></li>
        <li><Link to={"/training"}>Training Services</Link></li>
        <li><Link to={"/bpo"}>Business Services</Link></li>

      </ul>
      <div className="copy">

        <p>&copy;&nbsp;{currentYear}&nbsp;XDRA</p>
      </div>
    </footer>
  )
}