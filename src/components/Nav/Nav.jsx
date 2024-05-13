import {useRef, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
// image imports
import VectorBg from '../Assets/VectorBg/VectorBg';
import mikaLogoMobile from '../../assets/logo/mika-logo-mobile.svg';
import mikaLogoDesktop from '../../assets/logo/mika-logo-desktop.png';

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
            element: 'PROJECT MANAGEMENT USŁUG BUDOWLANO-WYKOŃCZENIOWYCH'
        },
    ]

    return (
      <header className="header">
        <img className='header-logo__mobile' src={mikaLogoMobile} alt='background-vector' />
        <img className='header-logo__desktop' src={mikaLogoDesktop} alt='background-vector' />
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
                                } else if (item.element != 'oferta') {
                                    setIsOfferClicked(false)
                                    menuTranformation()
                                    showNavbar();
                                }
                            }}
                        >{item.element}
                        </NavLink>
                        {isOfferClicked && item.element === 'oferta' && (
                        <div className="offer-container">
                            {OfferContent.map((item, index) => (
                                <p 
                                    className='offer-container__element' 
                                    key={index}
                                    onClick={() => {
                                        showNavbar();
                                        menuTranformation();
                                        }}
                                >{item.element}
                                </p>
                            ))}
                        </div>
                        )}
                    </li>
                ))
                }
            </ul>
            <VectorBg className='bg-vector'/>
        </nav>
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