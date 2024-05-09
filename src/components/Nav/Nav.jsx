import {useRef, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {

    const [isOfferClicked, setIsOfferClicked] = useState(false);
    const navRef = useRef();
    const buttonRef = useRef();

    // Hamburger menu action 
    const menuTranformation = () => {
        buttonRef.current.classList.toggle('open');
    }

    const handleClick = () => {
        setIsOfferClicked(true);
    };

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

    const OfferContent = [
        {
            element: 'dla nowo otwieranych biznesów'
        },
        {
            element: 'dla instniejących biznesów'
        },
        {
            element: 'IMPLEMENTACJA NOWOCZESNYCH NARZĘDZI BIZNESOWYCH'
        },
        {
            element: 'BADANIA RYNKU I TRENDY'
        },
        {
            element: 'PROJECT MANAGEMENT USŁUG BUDOWLANO-WYKOŃCZENIOWYCH'
        },
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
                            onClick={() => {
                                if (item.element === 'oferta') {
                                    handleClick();
                                }
                                {/* TODO: zmień logikę - po kliknięciu w oferta nav nie może się zwijać */}
                                showNavbar();
                            }}
                        >{item.element}
                        </NavLink>
                        {isOfferClicked && item.element === 'oferta' && (
                        <div className="offer-container">
                            {OfferContent.map((item, index) => (
                                <p 
                                    className='offer-container__element' 
                                    key={index}
                                    onClick={showNavbar}
                                >{item.element}
                                </p>
                            ))}
                            
                        </div>
                    )}
                    </li>
                ))
                }
            </ul>
        </nav>
        {/* <button onClick={showNavbar} className="close-circle__button">
            <span class="material-symbols-outlined">close</span>
        </button> */}
        <button onClick={showNavbar} className="hamburger-box">
            <div className='hamburger-inner' onClick={menuTranformation} ref={buttonRef}>
                <div className='hamburger-top__bun'></div>
                <div className='hamburger-middle__bun'></div>
                <div className='hamburger-bottom__bun'></div>
            </div>
        </button>
      </header>
    );
}

export default Nav