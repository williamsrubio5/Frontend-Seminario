import {MdHome} from 'react-icons/md';
import {NavLink} from 'react-router-dom';


import './Footer.css';

const Footer = () => {
return(
    <footer>
        <nav>
            <ul>
                <li><NavLink to="/home"><MdHome size="2em"></MdHome></NavLink></li>
            </ul>
        </nav>
    </footer>
)
}

export default Footer;