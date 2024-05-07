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

    const NavList = [
        { 
            element: 'o nas',
            adress: 'about'
        },
        { 
            element: 'oferta',
            adress: '/offer'
        },
        { 
            element: 'succes story',
            adress: '/succes-story'
        },
        { 
            element: 'blog',
            adress: '/blog'
        },
        { 
            element: 'kontakt',
            adress: '/contact'
        }
    ]

    return (
      <header className="header">
        <nav className="nav-container" ref={navRef}>
            <ul className="nav-list">
                {NavList.map((item, index) => (
                    <li className="nav-list__element" key={index}>
                        <NavLink
                            to={item.adress}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={showNavbar}
                        >{item.element}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
            <button className="close-circle__button">
                <span class="material-symbols-outlined">close</span>
            </button>
        </nav>
      </header>
    );
}

export default Nav