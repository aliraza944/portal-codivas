import logo from '../images/codivas-dark.png';

const Footer = () => {
    return (
        <footer className="footer">
            <span class="copyright">
                © 2021 <a href="">Codivas</a>
            </span>
            <img src={logo} alt="Codivas logo"/>
            <ul className="footer-links">
                <li>Codivas</li>
                <li>Sobre Nós</li>
                <li>Blog</li>
            </ul>
        </footer>
    )
}

export default Footer;