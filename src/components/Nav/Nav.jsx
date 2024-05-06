import {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        // Scrolling to top of the page
        window.scrollTo({
            top: 0,
          });
    }

    return (
      <header className="header">
        <nav className="nav-container" ref={navRef}>
            <ul className="nav-list">
                <li className="nav-list__element">
                    <NavLink
                        to
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={showNavbar}
                    >o nas
                    </NavLink>
                </li>
                <li className="nav-list__element">
                    <NavLink
                        to
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={showNavbar}
                    >oferta
                    </NavLink>
                </li>
                <li className="nav-list__element">
                    <NavLink
                        to
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={showNavbar}
                    >succes story
                    </NavLink>
                </li>
                <li className="nav-list__element">
                    <NavLink
                        to
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={showNavbar}
                    >blog
                    </NavLink>
                </li>
                <li className="nav-list__element">
                    <NavLink
                        to
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={showNavbar}
                    >kontakt
                    </NavLink>
                </li>
            </ul>
            <button className="close-circle__button">
                <span class="material-symbols-outlined">close</span>
            </button>
        </nav>
      </header>
    );
}

export default Nav
